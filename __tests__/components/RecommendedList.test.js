import { render, screen } from "@testing-library/react";
import RecommendedList from "../../components/RecommendedList";
import productData from "../../__mocks__/data/product.json";

describe("RecommendedList", () => {
  test("RecommendedList is renders 4 products", () => {
    const current = productData.id;
    const products = productData.collections.edges[0].node.products.edges;
    render(<RecommendedList current={current} products={products} />);

    // Future Cyborg
    const productTitle1 = screen.getByRole("heading", {
      name: products[1].node.title,
    });
    expect(productTitle1).toBeInTheDocument();

    // Namaste Motherboards
    const productTitle2 = screen.getByRole("heading", {
      name: products[2].node.title,
    });
    expect(productTitle2).toBeInTheDocument();

    // Overstimulation
    const productTitle3 = screen.getByRole("heading", {
      name: products[3].node.title,
    });
    expect(productTitle3).toBeInTheDocument();

    // Millionaire in the Waiting
    const productTitle4 = screen.getByRole("heading", {
      name: products[4].node.title,
    });
    expect(productTitle4).toBeInTheDocument();
  });
});
