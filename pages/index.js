import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { fetchBrands } from "../utils/fetchBrands";
import HeaderSection from "../components/HeaderSection";
import ProductCard from "../components/ProductCard";
import BrandCard from "../components/BrandCard";
import Image from "next/image";
const query = `//groq
  *[_type == "product" && defined(slug.current)]
`;
const queryBrands = `//groq
  *[_type == "brand"]
`;

function IndexPage(props) {
  const { productsData, preview, brands } = props;
  const router = useRouter();

  if (!router.isFallback && !productsData) {
    return <Error statusCode={404} />;
  }
  const { data: products } = usePreviewSubscription(query, {
    initialData: productsData,
    enabled: preview || router.query.preview !== null,
  });

  console.log(brands);

  return (
    <div className="my-8">
      <div className="mt-4">
        <HeaderSection />
        <div className="container mx-auto px-6">
          {/* <h3 className="text-gray-700 text-2xl font-medium">Juices</h3> */}
          {/* <span className="mt-3 text-sm text-gray-500">The Juicy bits.</span> */}
          {/* <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 ">
            {products.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div> */}
          <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 ">
            {brands.map((brand) => (
              <BrandCard key={brand._id} {...brand} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const productsData = await getClient(preview).fetch(query);
  const brands = await getClient(preview).fetch(queryBrands);

  return {
    props: {
      preview,
      productsData,
      brands,
    },
  };
}

export default IndexPage;
