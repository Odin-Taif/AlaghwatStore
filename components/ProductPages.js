import { urlFor, PortableText, getClient } from "../utils/sanity";
import Link from "next/link";
export default function Device(props) {
  const { title, products } = props;
  // console.log(products);
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((product) => (
              <Link
                key={product._id}
                href={`/device/${product.slug.current}`}
                className="h-80 w-full cursor-pointer rounded-sm hover:border-2 border-purple-700"
              >
                <div
                  style={{
                    backgroundImage: `url('${urlFor(product.mainImage)
                      .auto("format")
                      .fit("crop")
                      .quality(100)}`,
                  }}
                  alt={`Photo of ${product.title}`}
                  className="h-full w-full bg-cover bg-center"
                />
                <p className="mt-1 text-lg font-medium text-gray-900">
                  <span className="mt-2 text-md text-gray-100">
                    {product.title}
                  </span>
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
