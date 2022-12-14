import { useRouter } from "next/router";
import Layout from "../components/Layout";
import ShopProvider from "../context/shopContext";
import "tailwindcss/tailwind.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>
  );
};

export default MyApp;
