import { render, screen } from "@testing-library/react";
import ProductList from "../../components/ProductList";
import productsData from "../../__mocks__/data/products.json";

describe("ProductList Component", () => {
  test("ProductList renders all 6 of the products", () => {
    render(<ProductList products={productsData} />);

    // Plan For The Best
    const productTitle1 = screen.getByRole("heading", {
      name: productsData[0].node.title,
    });
    expect(productTitle1).toBeInTheDocument();

    // Future Cyborg
    const productTitle2 = screen.getByRole("heading", {
      name: productsData[1].node.title,
    });
    expect(productTitle2).toBeInTheDocument();

    // Namaste Motherboards
    const productTitle3 = screen.getByRole("heading", {
      name: productsData[2].node.title,
    });
    expect(productTitle3).toBeInTheDocument();

    // Overstimulation
    const productTitle4 = screen.getByRole("heading", {
      name: productsData[3].node.title,
    });
    expect(productTitle4).toBeInTheDocument();

    // Millionaire in the Waiting
    const productTitle5 = screen.getByRole("heading", {
      name: productsData[4].node.title,
    });
    expect(productTitle5).toBeInTheDocument();

    // Player Ready
    const productTitle6 = screen.getByRole("heading", {
      name: productsData[5].node.title,
    });
    expect(productTitle6).toBeInTheDocument();
  });
});
