export default {
  title: "deviceName",
  name: "deviceName",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    // {
    //   title: "Price",
    //   name: "price",
    //   type: "number",
    // },
    {
      title: "Main image",
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
