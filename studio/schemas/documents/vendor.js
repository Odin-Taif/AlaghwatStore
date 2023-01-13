export default {
  name: "vendor",
  title: "vendor",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "logo",
      title: "logo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "devices",
      title: "devices",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "product" },
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "logo",
    },
  },
};
