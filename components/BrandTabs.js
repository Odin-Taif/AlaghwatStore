import { useState } from "react";
import { Tab } from "@headlessui/react";
import BrandCard from "../components/BrandCard";
import { urlFor } from "../utils/sanity";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join("");
}

export default function BrandTabs({ productsData }) {
  return (
    <div className="w-full px-0 py-2">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-teal-50 p-1">
          {productsData.map((vendor) => (
            <Tab
              key={vendor._id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-opacity-60 ring-offset-1 ring-offset-pink-300 focus:outline-none focus:ring-2",

                  selected ? " shadow" : " hover:bg-pink-100  hover:text-white"
                )
              }
            >
              <BrandCard key={vendor._id} {...vendor} />
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mb-80 rounded-xl">
          {productsData.map((vendor) => (
            <Tab.Panel
              key={vendor._id}
              className={classNames(
                "bg-white p-1",
                "ring-white ring-opacity-60"
              )}
            >
              <ul className="grid gap-2 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-2">
                {vendor.products.map((product) => (
                  <li
                    key={product._id}
                    className="flex justify-between relative rounded-md p-3 m-1 bg-gray-100 hover:bg-pink-100"
                  >
                    <h3 className="text-sm font-medium p-3">{product.title}</h3>
                    <div className="flex justify-start ">
                      <div
                        className="h-20 w-20 md:w-40 md:h-40 bg-cover rounded-full border-2 border-y-teal-300"
                        style={{
                          backgroundImage: `url('${urlFor(product.mainImage)
                            .auto("format")
                            .fit("crop")
                            .width(200)
                            .quality(100)}`,
                        }}
                      />
                    </div>

                    <Link
                      href={`/devices/${product.slug.current}`}
                      className={classNames(
                        "absolute inset-0 rounded-xl",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
