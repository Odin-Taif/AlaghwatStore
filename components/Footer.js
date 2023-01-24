import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaMailBulk,
  FaMobileAlt,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="relative  pt-8 pb-6  bg-black">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          ></svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">
                Öppettider:
                <hr className="my-3 border-teal-700" />
              </h4>
              <h5 className="text-lg mt-0 mb-2  text-white">
                Måndag-Fredag 11:00-15:00 <br /> Lördag 11:00-15:00
                <br />
                <span className="text-red-500"> Söndag Stängt</span>
              </h5>
              <div className=" flex flex-row mt-6 lg:mb-0 mb-6">
                <a
                  href="https://www.instagram.com/vasteras_tech_ab/?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  className=" p-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2  hover:bg-sky-700"
                >
                  <FaInstagram size={20} className="mx-auto" />
                </a>
                <a
                  href="https://www.facebook.com/people/V%C3%A4ster%C3%A5s-Tech/100083006367510/"
                  target="_blank"
                  className="p-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2  hover:bg-sky-700"
                >
                  <FaFacebookF size={20} className="mx-auto" />
                </a>

                <a
                  href="mailto:vasteras.tech@gmail.com"
                  className="p-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2  hover:bg-sky-700"
                >
                  <FaMailBulk size={20} className="mx-auto" />
                </a>
                <a
                  href="tel:+46769136931"
                  className=" p-2 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2  hover:bg-sky-700"
                >
                  <FaMobileAlt size={20} className="mx-auto" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Mer info
                  </span>
                  <ul className="list-unstyled text-white">
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-2 border-teal-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-white">
                Copyright © {new Date().getFullYear()} | Västerås Tech AB.
                <br />
                <span> powered by | </span>
                <Link
                  href="https://www.levantisk.com/"
                  target={"_blank"}
                  className="hover:text-blue-500"
                >
                  Levantisk AB
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
