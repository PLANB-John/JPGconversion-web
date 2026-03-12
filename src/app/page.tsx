import { redirect } from "next/navigation";
import { defaultLocale } from "@/data/locales";

export default function EntryPage() {
  redirect(`/${defaultLocale}`);
}
