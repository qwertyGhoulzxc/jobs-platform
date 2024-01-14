import { formatMoney } from "@/lib/utils";
import { Job } from "@prisma/client";
import { Banknote, Briefcase, Globe2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MarkDown from "./Markdown";

interface IJobPageProps {
  job: Job;
}

export default function JobPage({
  job: {
    title,
    description,
    companyName,
    applicationUrl,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
  },
}: IJobPageProps) {
  return (
    <section className="w-full grow space-y-5">
      <div className="flex items-center gap-3">
        {companyLogoUrl && (
          <Image
            src={companyLogoUrl}
            alt="Company logo"
            height={100}
            width={100}
            className="rounded-xl"
          />
        )}
        <div>
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="font-semibold">
              {applicationUrl ? (
                <Link
                  href={new URL(applicationUrl).origin}
                  className="color text-pink-700 hover:underline"
                >
                  {companyName}
                </Link>
              ) : (
                <span>{companyName}</span>
              )}
            </p>
          </div>
          <div
            className="text-muted-foreground
					"
          >
            <div className="text-muted-foreground">
              <p className="flex items-center gap-1.5 ">
                <Briefcase size={16} className="shrink-0" />
                {type}
              </p>
              <p className="flex items-center gap-1.5 ">
                <MapPin size={16} className="shrink-0" />
                {locationType}
              </p>
              <p className="flex items-center gap-1.5 ">
                <Globe2 size={16} className="shrink-0" />
                {location || "Worldwide"}
              </p>
              <p className="flex items-center gap-1.5 ">
                <Banknote size={16} className="shrink-0" />
                {formatMoney(salary)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>{description && <MarkDown>{description}</MarkDown>}</div>
    </section>
  );
}
