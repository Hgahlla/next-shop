import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import { getProductsInCollection } from "../lib/shopify";

const Home = ({ products }) => {
  return (
    <>
      <Hero />
      <ProductList products={products} />
    </>
  );
};

export const getStaticProps = async () => {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
};

export default Home;
