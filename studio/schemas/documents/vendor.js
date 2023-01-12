export default {
  name: "vendor",
  title: "Vendor",
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
      title: "Device Type",
      name: "devices",
      type: "array",
      of: [
        {
          title: "Device",
          type: "deviceName",
        },
      ],
    },
    {
      title: "DeviceType",
      name: "devicess",
      type: "array",
      of: [
        {
          title: "Device",
          type: "deviceName",
        },
      ],
    },

    // {
    //   name: "description",
    //   title: "Description",
    //   type: "blockContent",
    // },
  ],
  preview: {
    select: {
      title: "title",
      media: "logo",
    },
  },
};
