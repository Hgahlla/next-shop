import { render, screen } from "@testing-library/react";
import ProductCard from "../../components/ProductCard";
import productsData from "../../__mocks__/data/products.json";

describe("ProductCard", () => {
  beforeEach(() => {
    const product = productsData[0];
    render(<ProductCard product={product} />);
  });

  test("Products image is rendered", () => {
    const productImage = screen.getByRole("img", {
      name: /plan for the best/i,
    });
    expect(productImage).toBeInTheDocument();
  });

  test("Product title is rendered", () => {
    const productTitle = screen.getByRole("heading", {
      name: /plan for the best/i,
    });
    expect(productTitle).toBeInTheDocument();
  });

  test("Product price is rendered", () => {
    const productPrice = screen.getByText(/\$75\.00/i);
    expect(productPrice).toBeInTheDocument();
  });
});
