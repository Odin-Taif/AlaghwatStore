import { useState } from "react";
import { Tab } from "@headlessui/react";
import BrandCard from "./BrandCard";
import { urlFor } from "../utils/sanity";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join("");
}

export default function VendorsTabs({ productsData }) {
  console.log(productsData);
  const { vendor } = productsData;
  return (
    <div className="w-full flex flex-col md:flex-row px-0 py-50 border-t-2 border-b-2 border-purple-700">
      {productsData.map((vendor) => (
        <Link
          href={`/vendor/${vendor.slug.current}`}
          key={vendor._id}
          className=" w-full flex flex-col mx-auto my-2 p-2 items-center justify-center rounded-sm bg-purple-100 hover:bg-teal-400 border-l-2 border-white"
        >
          <div
            className="flex mx-auto items-center justify-center h-40 w-40 bg-cover rounded-full border-2  border-y-teal-300 cursor-pointer "
            style={{
              backgroundImage: `url('${urlFor(vendor.logo)
                .auto("format")
                .fit("crop")
                .width(200)
                .quality(80)}`,
            }}
          />

          <div className="px-5 py-3 ">
            <h3 className="text-center text-white uppercase">{vendor.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
