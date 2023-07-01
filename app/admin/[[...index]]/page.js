"use client";

import client from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function AdminPage() {
  return <NextStudio config={client} />;
}
