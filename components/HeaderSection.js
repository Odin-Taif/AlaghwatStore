import Image from "next/image";
import Link from "next/link";
import vastech from "../public/Assests/webP/vastech.webp";

import { FaMobileAlt } from "react-icons/fa";
function HeaderSection() {
  return (
    <section className="bg-black dark:bg-gray-900 border-l-2 border-t-2 border-purple-700 ">
      <div className="grid py-4 px-4 mx-auto max-w-screen-xl lg:gap-0 xl:gap-0 lg:py-2 lg:grid-cols-12">
        <div className="place-self-center mr-auto lg:col-span-7">
          <Imagex
            src={vastech}
            cover="true"
            draggable="false"
            alt="vastras tech company"
            priority="true"
            className="border-t-2 border-b-2 border-purple-700"
          />
          <Link
            href="tel:+46769136931"
            className="inline-flex m-4 hover:bg-cyan-300 justify-center items-center py-3 px-5 text-base font-medium text-center rounded border border-gray-300 focus:ring-4 text-white "
          >
            <FaMobileAlt />
            Ring Oss
          </Link>
          {/* <Link
            href="/contact"
            className="inline-flex m-4 hover:bg-cyan-300 justify-center items-center py-3 px-5 text-base font-medium text-center rounded border border-gray-300 focus:ring-4 text-white "
          >
            Kontakta Oss
          </Link> */}
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
