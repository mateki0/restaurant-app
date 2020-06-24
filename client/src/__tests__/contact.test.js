import React from "react";
import { render, cleanup } from "@testing-library/react";

import Contact from "../Components/Contact/Contact";

test("renders without crashing", () => {
  const { getByTestId } = render(<Contact />);
  const contact = getByTestId("contact-div");
  expect(contact).toBeDefined();
});

test("renders without crashing", () => {
  const { getByTestId } = render(<Contact />);
  const form = getByTestId("contact-form");
  expect(form).toBeDefined();
});
