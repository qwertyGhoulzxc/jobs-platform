import JobPage from "@/components/Job-page";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import AdminSidebar from "./Admin-sidebar";

interface IPageProps {
  params: { slug: string };
}

export default async function Page({ params: { slug } }: IPageProps) {
  const job = await prisma.job.findUnique({
    where: { slug },
  });

  if (!job) notFound();

  return (
    <main className=" m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
      <AdminSidebar job={job} />
    </main>
  );
}
