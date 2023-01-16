import Head from "next/head";
import Link from "next/link";
import { FiShare } from "react-icons/fi";
import { MdQrCode, MdSaveAlt } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { motion } from "framer-motion";
import { getClient } from "../utils/sanity";
import { Key, ReactChild, ReactFragment, ReactPortal } from "react";
const querySo = `//groq
*[_type == "social"]
`;
const BusinessCardPage = ({ social }) => {
  console.log(social);
  return (
    <>
      <Head>
        <title>|ContactQR</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="title"
        />
      </Head>

      <div className="text-black w-full h-auto p-1 rounded-md">
        <div className="grid col-gap-3 items-center m-4">
          {/* <ProfilePic /> */}
        </div>
        <div className="">
          {social.map((item) => (
            <Link
              className="p-4 m-10 bg-teal-800 text-zinc-200"
              href={item.href}
              key={item._id}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export async function getStaticProps({ params = {}, preview = false }) {
  const social = await getClient(preview).fetch(querySo);
  return {
    props: {
      social,
    },
  };
}
export default BusinessCardPage;
