import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from "@testing-library/react";
import axios from "axios";
import UserHeader from "../Components/UserHeader/UserHeader";

afterEach(cleanup);

jest.mock("axios");
test("async axios request work ", async () => {
  const user = null;
  axios.get.mockResolvedValue({ data: null });

  const { getByTestId } = render(<UserHeader user={user} />);

  const resolved = await waitForElement(() => getByTestId("userName"));
  expect(resolved.textContent).toBe("Hello, Guest");
});

test("async axios request work with user defined", async () => {
  const user = {
    local: {
      email: "mateki0@interia.pl",
      password: 12345678,
      cart: [],
    },
  };
  axios.get.mockResolvedValue({ data: null });

  const { getByTestId } = render(<UserHeader user={user} />);

  const resolved = await waitForElement(() => getByTestId("userName"));
  expect(resolved.textContent).toBe("Hello, mateki0");
});
