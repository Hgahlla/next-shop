import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../../components/Navbar";
import ShopProvider from "../../context/shopContext";

describe("Navbar Component", () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      disconnect: () => null,
      observe: () => null,
      takeRecords: () => null,
      unobserve: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  test("MiniCart renders when the cart is clicked on", async () => {
    render(
      <ShopProvider>
        <Navbar />
      </ShopProvider>
    );
    const cartBtn = screen.getByText(/cart/i);

    const user = userEvent.setup();
    await user.click(cartBtn);

    const cartHeading = await screen.findByRole("heading", {
      name: /shopping cart/i,
    });
    expect(cartHeading).toBeInTheDocument();
  });
});
