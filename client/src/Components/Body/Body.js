import React from "react";
import "react-animated-slider/build/horizontal.css";
import "./body.css";
import Sliders from "./Sliders";
import MapContainer from "../MapContainer/MapContainer";
import MarketingSlider from "./MarketingSlider";
import WelcomeToRestaurant from "./WelcomeToRestaurant";
import Boxes from "./Boxes";
import ThirdPanel from "./ThirdPanel";
import SecondPanel from "./SecondPanel";
import FirstPanel from "./FirstPanel";
function Body() {
  return (
    <main data-testid="body-div">
      <MapContainer />
      <FirstPanel />
      <SecondPanel />
      <ThirdPanel />
      <Sliders />
      <Boxes />
      <WelcomeToRestaurant />
      <MarketingSlider />
    </main>
  );
}
export default Body;
