import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { fetchBrands } from "../utils/fetchBrands";
import HeaderSection from "../components/HeaderSection";
import ProductCard from "../components/ProductCard";
import BrandTabs from "../components/BrandTabs";
import Image from "next/image";
const query = `//groq
  *[_type == "product" && defined(slug.current)]
`;
const queryBrands = `//groq
  *[_type == "brand"]
`;
const queryVendor = `//groq
  *[_type == "vendor"]
`;

function IndexPage(props) {
  const { productsData, preview, brands, vendors } = props;

  const router = useRouter();

  if (!router.isFallback && !productsData) {
    return <Error statusCode={404} />;
  }
  const { data: products } = usePreviewSubscription(query, {
    initialData: productsData,
    enabled: preview || router.query.preview !== null,
  });

  // console.log(brands);
  console.log(vendors);

  return (
    <div className="my-0">
      <div className="mt-1">
        <HeaderSection />
        <div className="container mx-auto px-6">
          <h1 className=" text-sky-800 text-4xl font-semibold mx-auto my-3 px-1">
            Välj vad vill du laga?
          </h1>
          {/* <h3 className="text-gray-700 text-2xl font-medium">Juices</h3> */}
          {/* <span className="mt-3 text-sm text-gray-500">The Juicy bits.</span> */}
          {/* <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 ">
            {products.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div> */}
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 mt-2 ">
            <BrandTabs vendors={vendors} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params = {}, preview = false }) {
  const productsData = await getClient(preview).fetch(query);
  const brands = await getClient(preview).fetch(queryBrands);
  const vendors = await getClient(preview).fetch(queryVendor);

  return {
    props: {
      preview,
      productsData,
      brands,
      vendors,
    },
  };
}

export default IndexPage;
