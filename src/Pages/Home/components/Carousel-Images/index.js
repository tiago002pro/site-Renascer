import React from 'react';
import Slider from 'infinite-react-carousel';
import { Area, Img } from './styles';

const SimpleSlider = () => (
    <Area>
        <Slider dots>          
            <div>
                <Img src="https://1.bp.blogspot.com/-h1y5MiKHn8M/WhIuNTAJ2MI/AAAAAAAAHOo/llPLUBDe1pEzAOaW0tefuVroFz8stEplACLcBGAs/s1600/rend-collective-klove-large.jpg" />
            </div>
        </Slider>
  </Area>
);

export default SimpleSlider;