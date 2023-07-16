import Image from "next/image";
import { getProjects, urlFor } from "@/sanity/schemas/sanity-utils";

export default async function Banner() {
  const projects = await getProjects();

  console.log(projects[2].image);

  return (
    <section className="mt-20 overflow-x-clip relative ">
      <div className="mx-12 relative">
        <div className="flex mt-20 grid grid-cols-12 ">
          <div className="col-span-4 mt-20">
            <h2 className="heading2 font-light text-clamp text-primary-dark-blue">
              {projects[1].title}
            </h2>
            <p className="my-8">{projects[1].subtitle}</p>
          </div>
          <div className="col-span-6  ">
            <Image
              className="absolute bottom-[-23rem]"
              src={urlFor(projects[3].image).url()}
              width={1271}
              height={900}
              alt={projects[3].image.alt}
            />
            <img
              className="absolute z-10 right-[-16rem] top-[-9rem]"
              src={urlFor(projects[2].image).url()}
              alt={projects[2].image.alt}
            />
          </div>
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
