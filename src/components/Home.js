import React from 'react'
import styled from "styled-components";
import bkgImage from "../images/home-background.png";
import ImgSlider from "./ImgSlider";
const Home = () => {
	return (
		<Container>
			<ImgSlider />
		</Container>
	)
}

const Container = styled.div`
	position: relative;
	min-height: calc(100vh -250px);
	overflow-x: hidden;
	display: block; 
	top: 72px;
	padding: 0 calc(3.5vw + 5px);
	&:after {
		content: "";
		background: url(${bkgImage}) center center / cover
			no-repeat fixed;
		position: absolute;
		inset: 0px;
		opacity: 1;
		z-index: -1;
	}
`;
export default Home