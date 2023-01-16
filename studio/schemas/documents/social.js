import { MdPeople } from "react-icons/md";
export default {
  name: "social",
  type: "document",
  title: "Social",
  icon: MdPeople,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Link url",
      name: "href",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    },

    // {
    //   name: "attachment",
    //   type: "image",
    //   title: "Attachment",
    //   options: { hotspot: true },
    // },
  ],
};
