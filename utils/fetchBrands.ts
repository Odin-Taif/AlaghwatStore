// We check for the enviroment then we upon that we decide the whether it is the dev url or the production.
const dev = process.env.NODE_ENV !== "production";
export const server = dev
  ? "http://localhost:3000"
  : "https://www.mjdwebstudio.com";

export const fetchBrands = async () => {
  const res = await fetch(`${server}/api/getBrands`);
  // const res = await fetch("http://localhost:3000/api/getPosts");
  const data = await res.json();
  const brands = data.brands;
  return brands;
};
