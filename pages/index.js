import ProductList from "../components/ProductList";
import { getProductsInCollection } from "../lib/shopify";

const Home = ({ products }) => {
  console.log(products);
  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}
