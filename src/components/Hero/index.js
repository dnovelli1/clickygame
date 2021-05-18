import React from 'react';
import huge from '../images/hero.jpg';
// put hero image here from bootstrap
function Hero() {
    return(
        <img src={huge} className='img-fluid' alt='hero'></img>
    )
}

export default Hero;