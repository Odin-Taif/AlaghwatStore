import { MdLocalDrink } from "react-icons/md";

export default {
  name: "brand",
  title: "Brand",
  type: "document",
  icon: MdLocalDrink,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Main image",
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    // {
    //   title: "services",
    //   name: "services",
    //   type: "array",
    //   of: [
    //     {
    //       title: "service",
    //       type: "service",
    //     },
    //   ],
    // },
    {
      name: "vendor",
      title: "Vendor",
      type: "reference",
      to: { type: "vendor" },
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
  ],

  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "defaultProductVariant.images[0]",
    },
  },
};

// import { MdLooks } from "react-icons/md";

// export default {
//   name: "brand",
//   type: "document",
//   title: "Brand",
//   icon: MdLooks,
//   // fields: [
//   //   {
//   //     name: "name",
//   //     type: "string",
//   //   },
//   //   // {
//   //   //   name: "tagline",
//   //   //   type: "string",
//   //   // },
//   //   {
//   //     name: "logo",
//   //     type: "image",
//   //     options: {
//   //       hotspot: true,
//   //     },
//   //   },
//   //   {
//   //     title: "Device Type",
//   //     name: "devices",
//   //     type: "array",
//   //     of: [
//   //       {
//   //         title: "Device",
//   //         type: "deviceName",
//   //       },
//   //     ],
//   //   },
//   // ],
//   fields: [
//     {
//       name: "title",
//       title: "Title",
//       type: "string",
//     },
//     {
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: {
//         source: "title",
//         maxLength: 96,
//       },
//     },
//     {
//       name: "logo",
//       title: "logo",
//       type: "image",
//       options: { hotspot: true },
//     },
//     // {
//     //   title: "Device Type",
//     //   name: "devices",
//     //   type: "array",
//     //   of: [
//     //     {
//     //       title: "Device",
//     //       type: "deviceName",
//     //     },
//     //   ],
//     // },

//     // {
//     //   name: "description",
//     //   title: "Description",
//     //   type: "blockContent",
//     // },
//   ],
//   preview: {
//     select: {
//       title: "name",
//       subtitle: "tagline",
//       media: "logo",
//     },
//   },
// };
