import Image from "next/image";
import { ThemeProvider } from "styled-components";
import { Colors } from "@/app/Themes/Colors";
import { getProjects, getList, urlFor } from "@/sanity/schemas/sanity-utils";
import list from "@/sanity/schemas/list-schema";
import Link from "next/link";

export default async function Section() {
  const projects = await getProjects();

  const lists = await getList();

  return (
    <section className="py-4 px-12 bg-secondary-light-blue grid grid-cols-12">
      <div className="col-span-6 pt-20">
        <h2 className="heading2 font-light text-clamp text-primary-dark-blue">
          {projects[0].title}
        </h2>
        <p className="text-secondary-grey-blue pt-4">{projects[0].subtitle}</p>
      </div>
      <div className="col-span-12 grid mb-20">
        <ul className="flex pt-12 gap-x-20">
          {lists.map((list) => (
            <li className="">
              {list.image && (
                <Image
                  src={urlFor(list.image).url()}
                  alt={list.image.alt}
                  width={72}
                  height={72}
                />
              )}
              <h3 className="text-primary-dark-blue pt-4">{list.title}</h3>
              <p className="pt-4 text-secondary-grey-blue">{list.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
    /* <Container>
        <SubContainer>
          <Heading>{projects[0].title}</Heading>
          <SectionText>{projects[0].subtitle}</SectionText>
        </SubContainer>
        <ListContainer>
          <ListParent>
            <ListItems>
              <Image
                src="/icon-online.svg"
                width={72}
                height={72}
                loading="lazy"
              ></Image>
              <ListHeading>Online Banking</ListHeading>
              <ListText>
                Our mordern web and mobile applications allow you to keep track
                of your fianances whereever you are in the world.
              </ListText>
            </ListItems>
            {/* <ListItems>
              <Image
                src="/icon-budgeting.svg"
                width={72}
                height={72}
                loading="lazy"
              ></Image>
              <ListHeading>Simple budgeting</ListHeading>
              <ListText>
                Our mordern web and mobile applications allow you to keep track
                of your fianances whereever you are in the world.
              </ListText>
            </ListItems>
            <ListItems>
              <Image
                src="/icon-onboarding.svg"
                width={72}
                height={72}
                loading="lazy"
              ></Image>
              <ListHeading>Fast Onboarding</ListHeading>
              <ListText>
                Our mordern web and mobile applications allow you to keep track
                of your fianances whereever you are in the world.
              </ListText>
            </ListItems>
            <ListItems>
              <Image
                src="/icon-api.svg"
                width={72}
                height={72}
                loading="lazy"
              ></Image>
              <ListHeading>Open API</ListHeading>
              <ListText>
                Our mordern web and mobile applications allow you to keep track
                of your fianances whereever you are in the world.
              </ListText>
            </ListItems> */
    //       </ListParent>
    //     </ListContainer>
    //   </Container>
    // </ThemeProvider> */}
  );
}
