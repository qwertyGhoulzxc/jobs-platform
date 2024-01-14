import type { Metadata } from "next";
import NewJobForm from "./New-job-form";

export const metadata: Metadata = {
  title: "Post a new job",
};

export default function Page() {
  return <NewJobForm />;
}
