import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
//-=-=-=- ICons import
import { FiShare } from "react-icons/fi";
import { MdQrCode, MdSaveAlt } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import QrModal from "./qrModal/qrModal";

const BusinessCard = ({ channel }) => {
  const [showQr, setshowQr] = useState(false);
  let myFunc = () => {
    myFunc = function () {}; // kill it as soon as it was called
    console.log("call once and never again!"); // your stuff here
  };

  return (
    <>
      <div className="text-black w-full h-auto p-1 rounded-md">
        <article className="grid col-gap-3 items-center m-4">
          {/* <ProfilePic /> */}
          <div className="w-auto text-left text-xl">
            <motion.div whileTap={{ scale: 1.2 }} whileHover={{ scale: 0.9 }}>
              <FiShare style={{ cursor: "pointer" }} />
            </motion.div>
            <motion.div whileTap={{ scale: 1.2 }} whileHover={{ scale: 0.9 }}>
              <MdSaveAlt style={{ cursor: "pointer" }} />
            </motion.div>
            <motion.div whileTap={{ scale: 1.2 }} whileHover={{ scale: 0.9 }}>
              <FiEdit style={{ cursor: "pointer" }} />
            </motion.div>
            <motion.div whileTap={{ scale: 1.2 }} whileHover={{ scale: 0.9 }}>
              <MdQrCode
                style={{ cursor: "pointer" }}
                onClick={() => setshowQr(!showQr)}
              />
            </motion.div>
          </div>
        </article>

        <div className="w-auto text-left text-xl">
          <h2>{channel}</h2>
          {/* <h1> {jobtitle}</h1> */}
        </div>

        <div className="p-4 m-2">
          {/* {socialMediaData.map((item) => (
            <SociaMediaLink key={item.id} {...item} />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default BusinessCard;
