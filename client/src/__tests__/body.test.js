import React from "react";
import { render, cleanup } from "@testing-library/react";
import Body from "../Pages/HomePage";
import FirstPanel from "../Pages/HomePage/FirstPanel";
import SecondPanel from "../Pages/HomePage/SecondPanel";
import ThirdPanel from "../Pages/HomePage/ThirdPanel";
import Sliders from "../Pages/HomePage/Sliders";
import SingleSlider from "../Pages/HomePage/SingleSlider";
import salad from "../Components/Body/salad.jpg";
import pancakes from "../Components/Body/pancakes.jpg";
import eggs from "../Components/Body/eggs.jpg";
import Boxes from "../Pages/HomePage/Boxes";
import WelcomeToRestaurant from "../Pages/HomePage/WelcomeToRestaurant";
import MarketingSlider from "../Pages/HomePage/MarketingSlider";

afterEach(cleanup);

//parent div

test("renders without crashing", () => {
  const { getByTestId } = render(<Body />);
  const body = getByTestId("body-div");
  expect(body).toBeDefined();
});

// body children

//first panel
test("renders without crashing", () => {
  const { getByTestId } = render(<FirstPanel />);
  const first = getByTestId("first-panel-div");
  expect(first).toBeDefined();
});

// second panel
test("renders without crashing", () => {
  const { getByTestId } = render(<SecondPanel />);
  const second = getByTestId("second-panel-div");
  expect(second).toBeDefined();
});

test("render image correctly", () => {
  const { getByTestId } = render(<SecondPanel />);
  const img = getByTestId("second-panel-image");
  expect(img).toHaveAttribute("src", "chicken.jpg");
});

test("has good href", () => {
  const { getByTestId } = render(<SecondPanel />);
  const href = getByTestId("second-panel-href");
  expect(href).toHaveAttribute("href", "/menu");
});

//third panel
test("renders without crashing", () => {
  const { getByTestId } = render(<ThirdPanel />);
  const third = getByTestId("third-panel-div");
  expect(third).toBeDefined();
});

// sliders
test("renders without crashing", () => {
  const { getByTestId } = render(<Sliders />);
  const slider = getByTestId("sliders-div");
  expect(slider).toBeDefined();
});

test("carousel snapshot", () => {
  const carousel = [
    {
      src0: salad,
      name0: "Salads",
      src1: pancakes,
      name1: "Pancakes",
      src2: eggs,
      name2: "Eggs",
    },
  ];

  const { getByTestId } = render(<SingleSlider carousel={carousel} />);
  const img = getByTestId("slider-img");
  expect(img).toHaveAttribute("src", "salad.jpg");
});

// boxes tests
test("renders without crashing", () => {
  const { getByTestId } = render(<Boxes />);
  const box = getByTestId("boxes-div");
  expect(box).toBeDefined();
});

test("has a good img src", () => {
  const { getByTestId } = render(<Boxes />);
  const img = getByTestId("boxes-img");
  expect(img).toHaveAttribute("src", "salad.jpg");
});

// welcome component

test("renders without crashing", () => {
  const { getByTestId } = render(<WelcomeToRestaurant />);
  const welcome = getByTestId("welcome-div");
  expect(welcome).toBeDefined();
});

//marketing slider

test("renders without crashing", () => {
  const { getByTestId } = render(<MarketingSlider />);
  const marketing = getByTestId("marketing-div");
  expect(marketing).toBeDefined();
});

test("marketing slider has good values", () => {
  const { getByAltText } = render(<MarketingSlider />);
  const img = getByAltText("Very delicious Burger");
  expect(img).toHaveAttribute("src", "burger.jpg");
});
