import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Section from "./components/Section/Section";
import Article from "./components/Article/Article";
import { Footer } from "./components/Footer/Footer";
import { getProjects } from "@/sanity/schemas/sanity-utils";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
}
