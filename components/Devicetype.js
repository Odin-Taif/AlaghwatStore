import { urlFor, PortableText, getClient } from "../utils/sanity";
import Link from "next/link";
export default function Devicetype(props) {
  const { title, brands } = props;
  // console.log(brands);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {brands &&
            brands.map((brand) => (
              <Link
                key={brand._id}
                href={`/product/${brand.slug.current}`}
                className="group hover:bg-slate-100 "
              >
                <div className="flex flex-col mx-auto my-auto items-center justify-center ">
                  <div
                    style={{
                      backgroundImage: `url('${urlFor(brand.mainImage)
                        .auto("format")
                        .fit("crop")
                        .quality(100)}`,
                    }}
                    alt={`Photo of ${brand.title}`}
                    className="mx-auto items-center justify-center h-80 w-60 bg-cover rounded border-2 cursor-pointer"
                  />
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    <span className="mt-2 text-md text-gray-700">
                      {brand.title}
                    </span>
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
