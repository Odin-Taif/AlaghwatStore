import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import ProductPage from "../../components/ProductPage";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import CompanyProducts from "../../components/companyProducts";

// const query = groq`*[_type == "brand" && slug.current == $slug][0]`;

const query = `*[_type == "brand" && slug.current == $slug][0]{
  _id, title,
  "products": *[_type == "product" && references(^._id)]{title, ...},
  ...
}
`;
function ProductPageContainer({ productData, preview }) {
  // console.log(productData);
  const router = useRouter();
  if (!router.isFallback && !productData?.slug) {
    return <Error statusCode={404} />;
  }

  const { data: product = {} } = usePreviewSubscription(query, {
    params: { slug: productData?.slug?.current },
    initialData: productData,
    enabled: preview || router.query.preview !== null,
  });

  const { _id, title, products, mainImage, body, slug } = product;
  return (
    <>
      <CompanyProducts
        id={_id}
        title={title}
        products={products}
        mainImage={mainImage}
        body={body}
        services={services}
        slug={slug?.current}
      />
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const productData = await getClient(preview).fetch(query, {
    slug: params.slug,
  });

  return {
    props: { preview, productData },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "brand" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default ProductPageContainer;
