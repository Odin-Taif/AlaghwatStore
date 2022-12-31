// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { groq } from "next-sanity";
import { NextApiRequest, NextApiResponse } from "next/types";
import { sanityClient } from "../../utils/sanity";

const query = groq`*[_type=="brand"]{
  name,
    ...
}`;
type Data = {
  brands: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const brands = await sanityClient.fetch(query);
  res.status(200).json({ brands });
}
