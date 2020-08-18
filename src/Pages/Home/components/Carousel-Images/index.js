import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Slider } from './styles';
import './style.css';

import slider1 from './Assets/Img/slider-1.jpeg';
import slider2 from './Assets/Img/slider-2.jpeg';
import slider3 from './Assets/Img/slider-3.jpeg';

function CarouselImages() {
    return (
        <Slider>
        <div id="carouselHome" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselHome" data-slide-to="0" class="active"></li>
                <li data-target="#carouselHome" data-slide-to="1"></li>
                <li data-target="#carouselHome" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={slider1} class="img-fluid d-block" alt="SingerImage" />
                </div>

                <div class="carousel-item">
                    <img src={slider2} class="img-fluid d-block" alt="GuitaImage" />
                </div>

                <div class="carousel-item">
                    <img src={slider3} class="img-fluid d-block" alt="BassImage" />
                </div>

            </div>
            <a class="carousel-control-prev" href="#carouselHome" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselHome" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>      
        </Slider>



    );
}

export default CarouselImages;