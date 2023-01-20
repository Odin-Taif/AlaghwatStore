import Image from "next/image";
import Link from "next/link";
import vastech from "../public/Assests/webP/vastech.webp";

import { FaMobileAlt } from "react-icons/fa";
function HeaderSection() {
  return (
    <section className="bg-black dark:bg-gray-900 border-l-2 border-t-2 border-purple-700 ">
      <div className="grid py-4 px-4 mx-auto max-w-screen-xl lg:gap-0 xl:gap-0 lg:py-1 lg:grid-cols-12">
        <div className="place-self-center mr-auto lg:col-span-10">
          <Image
            src={vastech}
            cover="true"
            draggable="false"
            alt="vastras tech company"
            priority="true"
            className="border-t-2 border-b-2 border-purple-700"
          />
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
