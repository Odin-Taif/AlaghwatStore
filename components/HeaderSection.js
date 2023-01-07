import Image from "next/image";
import Link from "next/link";
import vastTech from "../public/Assests/webP/vastTech.webp";
import { FaQrcode } from "react-icons/fa";
function HeaderSection() {
  return (
    <section className="bg-black dark:bg-gray-900">
      <div className="grid py-4 px-4 mx-auto max-w-screen-xl lg:gap-0 xl:gap-0 lg:py-2 lg:grid-cols-12">
        <div className="place-self-center mr-auto lg:col-span-7">
          <h1 className="mb-1 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-white">
            Västerås Tech AB.
          </h1>
          <h1 className="mb-1 p-4 max-w-2xl text-2xl font-extrabold leading-none md:text-2xl sm:text-6xl text-white">
            Där allting lagas på nytt.
          </h1>

          {/* <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Ring Oss
          </a> */}
          <Link
            href="/contact"
            className="inline-flex m-4 justify-center items-center py-3 px-5 text-base font-medium text-center rounded border border-gray-300 focus:ring-4 text-white "
          >
            Kontakta Oss
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src={vastTech}
            cover="true"
            draggable="false"
            alt="vastras tech company"
            priority="true"
          />
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
