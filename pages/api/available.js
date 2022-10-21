const send = async (req, res) => {
  const {
    query: { id },
  } = req;

  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  const ShopifyData = async (query) => {
    const URL = `https://${domain}/api/2022-10/graphql.json`;

    const options = {
      endpoint: URL,
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };

    try {
      const response = await fetch(URL, options);
      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error("Products not fetched");
    }
  };

  const getProduct = async (handle) => {
    const query = `
    {
      product(handle: "${handle}") {
        id
        variants(first: 25) {
          edges {
            node {
              id
              availableForSale
            }
          }
        }
      }
    }`;

    const response = await ShopifyData(query);

    const product = response.data.product ? response.data.product : [];

    return product;
  };

  const product = await getProduct(id);
  res.json(product);
};

export default send;
