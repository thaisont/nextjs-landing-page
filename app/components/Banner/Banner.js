import Image from "next/image";
import { getProjects } from "@/sanity/schemas/sanity-utils";

export default async function Banner() {
  const projects = await getProjects();

  return (
    <section className="mt-20 relative overflow-clip">
      <div className="mx-12 relative">
        <div className="inline-block mt-20">
          <h2 className="heading2 font-light text-clamp text-primary-dark-blue">
            {projects[1].title}
          </h2>
        </div>
      </div>
    </section>

    // <BannerContainer>
    //   <BannerSubContainer>
    //     <BannerHeading>
    //       <BannerTitle></BannerTitle>
    //       <BannerText></BannerText>
    //       <StyledButtonLink href="/">Request an invite</StyledButtonLink>
    //     </BannerHeading>
    //     <ImageContainer>
    //       <Image
    //         src="/bg-banner.svg"
    //         width={1271}
    //         height={900}
    //         alt="backgrounds"
    //       />
    //     </ImageContainer>
    //     <ImageContainers>
    //       <Image
    //         src="/image-mockups.png"
    //         width={640}
    //         height={784}
    //         alt="phones"
    //       />
    //     </ImageContainers>
    //   </BannerSubContainer>
    // </BannerContainer>
  );
}
