const project = {
  name: "banner",
  type: "document",
  title: "Banner Content",
  fields: [
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
  ],
};

export default project;
