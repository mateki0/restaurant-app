import React from "react";
import "./about.css";
import Boxes from "../Body/Boxes";
import WelcomeToRestaurant from "../Body/WelcomeToRestaurant";
import Title from "../Title";
import OurDescription from "./OurDescription";
export default function About() {
  return (
    <div data-testid="about-div">
      <Title value="About us" />
      <OurDescription />
      <Boxes />
      <WelcomeToRestaurant />
    </div>
  );
}
