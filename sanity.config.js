import { deskTool } from "sanity/desk";
import { defineConfig } from "sanity";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const client = defineConfig({
  projectId: "1nvfv4i8",
  dataset: "production",
  apiVersion: "2023-06-09",
  basePath: "/admin",
  useCdn: false,
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default client;
