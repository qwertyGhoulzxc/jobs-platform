import JobFilterSidebar from "@/components/Job-filter-sidebar";
import JobResults from "@/components/Job-results";
import H1 from "@/components/ui/h1";
import type { TJobFilterValues } from "@/lib/validation";
import { type Metadata } from "next";

interface IPageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string;
  };
}

function getTitle({ location, q, remote, type }: TJobFilterValues) {
  const titlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type} developer jobs`
      : remote
        ? "Remote developer jobs"
        : "All developer jobs";

  const titleSuffix = location ? ` in ${location}` : "";

  return `${titlePrefix}${titleSuffix}`;
}

export function generateMetadata({
  searchParams: { location, q, remote, type },
}: IPageProps): Metadata {
  return {
    title: `${getTitle({
      q,
      type,
      location,
      remote: remote === "true",
    })} | Cherry Jobs`,
  };
}

export default async function Home({
  searchParams: { location, q, remote, type, page },
}: IPageProps) {
  const filterValues: TJobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-3 text-center">
        <H1>{getTitle(filterValues)}</H1>
        <p className="text-muted-foreground">Find your dream job</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults
          page={page ? parseInt(page) : undefined}
          filterValues={filterValues}
        />
      </section>
    </main>
  );
}
