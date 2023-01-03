import Image from "next/image";
import Link from "next/link";
import vastTech from "../public/Assests/webP/vastTech.webp";
import { FaQrcode } from "react-icons/fa";
function HeaderSection() {
  return (
    <section className="bg-black dark:bg-gray-900">
      <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center mr-auto lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
            Västerås Tech AB{" "}
            <button className="mx-3 p-1 justify-center items-center rounded border border-gray-300 hover:bg-sky-700 ">
              <FaQrcode size={30} color="white" />
            </button>
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Mobil & Surfplatta reparation. 🛠 <br />
            Köper & Säljer mobiler/Dator 📱💻
            <br />
            Tech Service ⚙<br />
            Mobil & Data tillbehörs.
          </p>
          {/* <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Ring Oss
          </a> */}
          <Link
            href="/contact"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded border border-gray-300 hover:bg-blue-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark: hover:bg-sky-700 dark:focus:ring-gray-800"
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
