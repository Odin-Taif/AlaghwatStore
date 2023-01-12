import { useState } from "react";
import { Tab } from "@headlessui/react";
import BrandCard from "../components/BrandCard";
import { urlFor } from "../utils/sanity";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BrandTabs({ vendors }) {
  // console.log(brands);
  return (
    <div className="w-full px-0 py-2">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {vendors.map((vendor) => (
            <Tab
              key={vendor._id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              <BrandCard key={vendor._id} {...vendor} />
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2 mb-80">
          {vendors.map((vendor) => (
            <Tab.Panel
              key={vendor._id}
              className={classNames(
                "rounded-xl bg-white p-1",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {vendor.devices.map((service) => (
                  <li
                    key={service._key}
                    className="flex justify-between relative rounded-md p-3 my-2 bg-gray-100 hover:bg-blue-100 "
                  >
                    <h3 className="text-sm font-medium p-3">{service.title}</h3>
                    <div className="flex justify-start ">
                      <h3 className="text-sm font-medium p-3">
                        {service.price}-SEK
                      </h3>
                      <div
                        className=" h-10 w-10 bg-cover rounded-full border-2 border-y-teal-300"
                        style={{
                          backgroundImage: `url('${urlFor(service.mainImage)
                            .auto("format")
                            .fit("crop")
                            .width(100)
                            .quality(80)}`,
                        }}
                      />
                    </div>

                    <Link
                      href={`/products`}
                      className={classNames(
                        "absolute inset-0 rounded-md",
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
