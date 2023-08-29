import React from "react";
import { getArticles, urlFor } from "@/sanity/schemas/sanity-utils";
import Image from "next/image";

export default async function Article() {
  const articles = await getArticles();

  return (
    <section className="py-4 px-12 bg-secondary-light-blue">
      <h2 className="heading2 font-light text-clamp text-primary-dark- col-span-12 pt-20">
        Latest Articles
      </h2>
      <ul className="grid grid-cols-4 pt-12 gap-x-8">
        {articles.map((article) => (
          <li className="h-full leading-normal list-item ">
            {article.image && (
              <div className="col-span-4">
                <Image
                  src={urlFor(article.image).url()}
                  alt={article.image.alt}
                  width={500}
                  height={500}
                  className="object-cover w-full h-52"
                />
              </div>
            )}
            <div className="bg-white px-4 pb-8 ">
              <p className="pt-4 text-secondary-grey-blue">
                By {article.author}
              </p>
              <h3 className="text-primary-dark-blue pt-4 w-3/4">
                {article.title}
              </h3>
              <p className="pt-4 text-secondary-grey-blue text-sm">
                {article.subtitle}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
    /* <SubContainer>
        <ArticleHeading>Latest Articles</ArticleHeading>
        <ListContainer>
          <ListParent>
            <ListItems $primary>
              <StyledImage
                src="/image-currency.jpg"
                width="100%"
                height="200"
                layout="responsive"
                style={{ objectFit: "cover" }}
              />
              <ListBox>
                <ListAuthor>By Claire Robinson</ListAuthor>
                <ListHeading>
                  Recieve money in any currency with no fees
                </ListHeading>
                <ListText $primary>
                  The world is getting smaller and we're becoming moremobile. So
                  why should you be forced to only receive money in a single ...
                </ListText>
              </ListBox>
            </ListItems>
            <ListItems $primary>
              <StyledImage
                src="/image-restaurant.jpg"
                width="100%"
                height="200"
                layout="responsive"
                style={{ objectFit: "cover" }}
              />
              <ListBox>
                <ListAuthor>By Claire Robinson</ListAuthor>
                <ListHeading>
                  Recieve money in any currency with no fees
                </ListHeading>
                <ListText $primary>
                  The world is getting smaller and we're becoming moremobile. So
                  why should you be forced to only receive money in a single ...
                </ListText>
              </ListBox>
            </ListItems>
            <ListItems $primary>
              <StyledImage
                src="/image-plane.jpg"
                width="100%"
                height="200"
                layout="responsive"
                style={{ objectFit: "cover" }}
              />
              <ListBox>
                <ListAuthor>By Claire Robinson</ListAuthor>
                <ListHeading>
                  Recieve money in any currency with no fees
                </ListHeading>
                <ListText $primary>
                  The world is getting smaller and we're becoming moremobile. So
                  why should you be forced to only receive money in a single ...
                </ListText>
              </ListBox>
            </ListItems>
            <ListItems $primary>
              <StyledImage
                src="/image-confetti.jpg"
                width="100%"
                height="200"
                style={{ objectFit: "cover" }}
              />
              <ListBox>
                <ListAuthor>By Claire Robinson</ListAuthor>
                <ListHeading>
                  Recieve money in any currency with no fees
                </ListHeading>
                <ListText $primary>
                  The world is getting smaller and we're becoming moremobile. So
                  why should you be forced to only receive money in a single ...
                </ListText>
              </ListBox>
            </ListItems>
          </ListParent>
        </ListContainer>
      </SubContainer> */
  );
}
