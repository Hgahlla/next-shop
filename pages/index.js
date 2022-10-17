import Head from "next/head";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import { getProductsInCollection } from "../lib/shopify";

const Home = ({ products }) => {
  return (
    <>
      <Head>
        <title>Next Shop</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content="Modern eCommerce built with Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more."
        />
        <meta property="og:title" content="Next Shop" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://next-shop-gamma.vercel.app/" />
        <meta
          property="og:image"
          content="https://next-shop-gamma.vercel.app/share.png"
        />
        <meta
          property="og:description"
          content="Modern eCommerce built with Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Next Shop" />
      </Head>
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
