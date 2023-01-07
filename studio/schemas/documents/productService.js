export default {
  title: "appleProducts",
  name: "productService",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Price",
      name: "price",
      type: "number",
    },
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
