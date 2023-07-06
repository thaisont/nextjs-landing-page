const list = {
  name: "list",
  type: "document",
  title: "List",
  fields: [
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
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "subtitle",
      type: "text",
      title: "Subtitle",
    },
  ],
};

export default list;
