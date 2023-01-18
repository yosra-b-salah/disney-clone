import React from 'react'
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ImgSlider = (props) => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoPlay: true,
	}
	return (
		<div>
			<Slider {...settings} >
				<div>
					<h3>Slider 1</h3>
				</div>
				<div>
					<h3>Slider 2</h3>
				</div>
				<div>
					<h3>Slider 3</h3>
				</div>
			</Slider>
		</div>
	)
}

export default ImgSlider