import { MdLooks } from "react-icons/md";

export default {
  name: "brand",
  type: "document",
  title: "Brand",
  icon: MdLooks,
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "tagline",
      type: "string",
    },
    {
      name: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Services",
      name: "services",
      type: "array",
      of: [
        {
          title: "Service",
          type: "productService",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "tagline",
      media: "logo",
    },
  },
};
