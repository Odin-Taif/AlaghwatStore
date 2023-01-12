import { MdLooks } from "react-icons/md";

export default {
  name: "brand",
  type: "document",
  title: "Brand",
  icon: MdLooks,
  // fields: [
  //   {
  //     name: "name",
  //     type: "string",
  //   },
  //   // {
  //   //   name: "tagline",
  //   //   type: "string",
  //   // },
  //   {
  //     name: "logo",
  //     type: "image",
  //     options: {
  //       hotspot: true,
  //     },
  //   },
  //   {
  //     title: "Device Type",
  //     name: "devices",
  //     type: "array",
  //     of: [
  //       {
  //         title: "Device",
  //         type: "deviceName",
  //       },
  //     ],
  //   },
  // ],
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
    // {
    //   title: "Device Type",
    //   name: "devices",
    //   type: "array",
    //   of: [
    //     {
    //       title: "Device",
    //       type: "deviceName",
    //     },
    //   ],
    // },

    // {
    //   name: "description",
    //   title: "Description",
    //   type: "blockContent",
    // },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "tagline",
      media: "logo",
    },
  },
};
