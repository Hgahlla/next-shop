const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function ShopifyData(query) {
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
}

export async function getProductsInCollection() {
  const query = `
    {
      collection(handle: "frontpage") {
        title
        products(first: 25) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 5) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }`;

  const productsData = await ShopifyData(query);

  const allProducts = productsData.data.collection.products.edges
    ? productsData.data.collection.products.edges
    : [];

  return allProducts;
}
