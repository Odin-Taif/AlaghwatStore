import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FiMapPin } from "react-icons/fi";
import { MdContactPhone } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Assests/webP/logo.webp";
import { useRouter } from "next/router";
const navigation = [
  { name: "Hem", href: "/", current: false },
  // { name: "Produkter", href: "/products", current: false },
  { name: "Kontakt", href: "/contact", current: false },
  { name: "Om Oss", href: "/about", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();
  // console.log(router.asPath);
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link
                  href={"/"}
                  className="border-2 rounded-sm border-teal-200 hover:border-x-indigo-500"
                >
                  <div className="flex flex-shrink-0 items-left">
                    <Image
                      className="block h-8 w-auto lg:hidden "
                      src={logo}
                      alt="VästråsTech"
                      width={"150"}
                      height={"150"}
                    />
                    <Image
                      className="hidden h-8 w-auto lg:block"
                      src={logo}
                      alt="VästråsTech"
                      width={"150"}
                      height={"150"}
                    />
                  </div>
                </Link>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={
                          router.asPath === item.href
                            ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir//V%C3%A4ster%C3%A5s+Tech+AB/data=!4m8!4m7!1m0!1m5!1m1!1s0x465e6177c01d8a57:0x8117349cbcdf9ca6!2m2!1d16.5420248!2d59.6102065"
                target="_blank"
              >
                <FiMapPin
                  size={25}
                  className="text-white m-2 hover:text-red-500"
                />
              </a>
              <Link
                href="tel:+46769136931"
                className="inline-flex m-4 hover:text-cyan-300 justify-center items-center py-3 px-5 text-base font-medium text-center focus:ring-4 text-white "
              >
                <FaMobileAlt size={25} />
              </Link>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <Disclosure.Button
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
