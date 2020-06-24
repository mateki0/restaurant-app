import React from "react";
import { render, cleanup } from "@testing-library/react";
import Login from "../Components/Login/Login";

afterEach(cleanup);

test("it renders without crashing", () => {
  const { getByTestId } = render(<Login />);
  const login = getByTestId("login-div");
  expect(login).toBeDefined();
});
