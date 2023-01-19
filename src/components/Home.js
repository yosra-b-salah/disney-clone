import React, { useEffect } from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import db, { collection, getDocs } from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

import ImgSlider from "./ImgSlider";
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';

import bkgImage from "../images/home-background.png";

const Home = () => {
	const dispatch = useDispatch();
	const userName = useSelector(selectUserName);





	useEffect(() => {
		let recommend = [];
		let newDisney = [];
		let original = [];
		let trending = [];
		function fetchData() {
			try {
				return new Promise(async (resolve, reject) => {
					const querySnapshot = await getDocs(collection(db, "movies"));
					querySnapshot.forEach((doc) => {
						switch (doc.data().type) {
							case "recommend": {
								recommend.push({ id: doc.id, ...doc.data() });
								break;
							}
							case "new": {
								newDisney.push({ id: doc.id, ...doc.data() });
								break;
							}
							case "original": {
								original.push({ id: doc.id, ...doc.data() });
								break;
							}
							case "trending": {
								trending.push({ id: doc.id, ...doc.data() });
								break;
							}
							default: break;
						}
					});
					resolve(200)
				})
			} catch (e) {
				console.error("Error fetching data", e);
			}
		}
		fetchData().then(() => {
			dispatch(setMovies({
				recommend,
				newDisney,
				original,
				trending
			}))

		})
	}, [dispatch])

	return (
		<Container>
			<ImgSlider />
			<Viewers />
			<Recommends />
			<NewDisney />
			<Originals />
			<Trending />
		</Container>
	)
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url(${bkgImage}) center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home