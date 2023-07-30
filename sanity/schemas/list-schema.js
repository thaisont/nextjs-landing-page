const list = {
  name: "list",
  type: "document",
  title: "List",
  fields: [
    {
      name: "type",
      type: "string",
      title: "Type",
      options: {
        list: [
          { title: "First section", value: "first-section" },
          { title: "Articles", value: "articles" },
        ],
      },
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "author",
      type: "string",
      title: "Author",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "subtitle",
      type: "text",
      title: "Subtitle",
    },
    {
      title: "Order",
      name: "order",
      type: "number",
    },
  ],
  orderings: [
    {
      title: "order",
      name: "orderDesc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Type",
      name: "type",
      by: [{ field: "type", direction: "asc" }],
    },
  ],
};

export default list;
