import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { fetchBrands } from "../utils/fetchBrands";
import HeaderSection from "../components/HeaderSection";
import ProductCard from "../components/ProductCard";
import VendorsTabs from "../components/VendorsTabs";

const query = `*[_type == "vendor"]{
  _id, title,
  "brands": *[_type == "brand" && references(^._id)]{title, ...},
  ...
}
`;

// const queryBrand = `*[_type == "vendor"]{
//   _id, title,
//   "products": *[_type == "product" && references(^._id)]{title, ...},
//   ...
// }
// `;
const queryBrands = `//groq
  *[_type == "brand"]
`;
const queryVendor = `//groq
  *[_type == "vendor"]
`;

function IndexPage(props) {
  const { productsData, preview, brands, vendors } = props;
  // console.log(productsData);
  const router = useRouter();

  if (!router.isFallback && !productsData) {
    return <Error statusCode={404} />;
  }
  const { data: products } = usePreviewSubscription(query, {
    initialData: productsData,
    enabled: preview || router.query.preview !== null,
  });

  return (
    <div className="my-0">
      <div className="mt-1">
        <HeaderSection />
        <div className="container mx-auto px-6">
          <h1 className="text-sky-800 text-4xl font-semibold mx-auto my-3 px-1">
            Välj vad vill du laga?
          </h1>
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 mt-2">
            <VendorsTabs vendors={vendors} productsData={productsData} />
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
