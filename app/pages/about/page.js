"use client";
import React from "react";
import { createClient, groq } from "next-sanity";

export default async function Page() {
  const client = createClient({
    projectId: "1nvfv4i8",
    dataset: "production",
    apiVersion: "2023-06-09",
    useCdn: true,
  });

  return <div>Page</div>;
}
