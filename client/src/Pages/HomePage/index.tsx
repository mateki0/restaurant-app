import React from 'react';
import MapContainer from '../../Components/MapContainer';
import RestaurantHeading from '../../Components/RestaurantHeading';
import MenuAdvertise from '../../Components/MenuAdvertise';

import MealsSlider from '../../Components/MealsSlider';
import SpecalitiesBoxes from '../../Components/SpecialitiesBoxes';
import MarketingSlider from '../../Components/MarketingSlider';
import WelcomeBox from '../../Components/WelcomeBox';
import InfoBar from '../../Components/InfoBar';
import StyledMain from '../../Components/Layout/StyledMain';
import Footer from '../../Components/Footer';

const HomePage = () => {
  return (
    <StyledMain>
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
      <Footer />
    </StyledMain>
  );
};
export default HomePage;
