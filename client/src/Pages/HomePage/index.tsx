import React from 'react';
import MapContainer from '../../Components/MapContainer';
import RestaurantHeading from '../../Components/RestaurantHeading';
import MenuAdvertise from '../../Components/MenuAdvertise';

import MealsSlider from '../../Components/MealsSlider';
import SpecalitiesBoxes from '../../Components/SpecialitiesBoxes';
import MarketingSlider from '../../Components/MarketingSlider';
import WelcomeBox from '../../Components/WelcomeBox';
import InfoBar from '../../Components/InfoBar';

const HomePage = () => {
  return (
    <main>
      <MapContainer />
      <RestaurantHeading />
      <MenuAdvertise />
      <InfoBar
        title="Here should be information about online 
      food order system and delivery options and pricing"
      />
      <MealsSlider />
      <SpecalitiesBoxes />
      <WelcomeBox />
      <MarketingSlider />
    </main>
  );
};
export default HomePage;
