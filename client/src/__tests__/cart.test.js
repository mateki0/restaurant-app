import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Cart from "../Components/Cart/Cart";
import SingleItem from "../Components/Cart/SingleItem";
import ItemList from "../Components/Cart/ItemList";

afterEach(cleanup);

test("renders without crashing", () => {
  const localCart = [{ item: "Burger", price: "2.5$", count: 2 }];
  const userCart = [];
  const { getByTestId } = render(
    <Cart localCart={localCart} userCart={userCart} />
  );
  const cart = getByTestId("cart-div");
  expect(cart).toBeDefined();
});

test("single item work", () => {
  const item = {
    item: "Burger",
    price: "2.5$",
    count: "1",
  };
  const { getByTestId } = render(<SingleItem item={item} />);
  const inc = getByTestId("single-item-button");
  expect(inc).toHaveAttribute("value", "Burger");
});

test("increment button works", () => {
  const item = {
    item: "Burger",
    price: "2.5$",
    count: "1",
  };
  const onClick = jest.fn();
  const { getByRole, getByTestId } = render(
    <SingleItem item={item} incrementItem={onClick} />
  );

  const button = getByRole("button", { name: "+" });
  fireEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});
