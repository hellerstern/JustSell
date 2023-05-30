import { useState } from "react";
import styled from "styled-components";
import { Button } from "carbon-components-react";
import { Container } from "../../layout/layout";
import { Header1 } from "../../components/header/hearder1";
import { 
	IMG_01, 
	IMG_02, 
	IMG_03,
	IMG_04,
	IMG_05,
	
	IMG_SER_01,
  IMG_SER_02,
  IMG_SER_03,

	IMG_SHP_01,
  IMG_SHP_02,
  IMG_SHP_03,
	IMG_SHP_04,
} from "../../config/images";
import { Footer1 } from "../../components/footer/footer1";

const Landing = () => {

	const [searchVal, setSearchVal] = useState('');

	return (
		<Container>
			<Wrapper>
				<Header1></Header1>
			</Wrapper>
			<Wrapper2>
				<Title1Div>
					<h1>
						Sell to the world today.
					</h1>

					<h2>
						Unlocking an entire realm of commerce, we empower individuals to effortlessly sell any item with unparalleled ease and at no cost. Our platform provides comprehensive buyer protection and ensures the utmost privacy for sellers.
					</h2>
				</Title1Div>

				<ImgDiv>
					<Button>Get started</Button>
					<div className="images">
						<img src={IMG_01}></img>
						<img src={IMG_02}></img>
						<img src={IMG_03}></img>
					</div>
				</ImgDiv>
				<Title1>
					Whole new world
				</Title1>

				<OptionContainer>
					<OptionDiv>
						<h1>Convenient</h1>
						<ul>
							<li>
								Explore a new world of sellers near you. JustSell connects people with nearby service providers across the internet.
							</li>
						</ul>
						<img src={IMG_05}></img>
					</OptionDiv>

					<OptionDiv>
						<h1>Safety</h1>
						<ul>
							<li>
								“Hi-5s” are a 6-digit code that a customer gets and share with the sellers once the service is completed that will instantly transfer the payment.
							</li>
							<li>
								Encrypted chat and built in privacy features ensure only buyers and sellers do not have to give out any personal details.
							</li>
							<li>
								Both sellers and buyers rate each-other after the sale to ensure trust can be built in the community. 
							</li>
						</ul>
					</OptionDiv>

					<OptionDiv>
						<h1>Affordable</h1>
						<ul>
							<li>
								Save more on local sellers that have fewer costs and can offer a lower price than traditional businesses.
							</li>
						</ul>
						<img src={IMG_04}></img>
					</OptionDiv>

				</OptionContainer>
				<ServiceDiv>
					<h1>Earn</h1>
					<h1>Faster.</h1>
					<h1>For Free.</h1>
					<h2>
						We use Artificial Intelligence and machine learning to get our sellers sales from across the internet. Sign up and let us handle the rest.
					</h2>

					<Button>
						Get started
					</Button>

					<img src={IMG_SER_01} className="ser-1"></img>
					<img src={IMG_SER_02} className="ser-2"></img>
					<img src={IMG_SER_03} className="ser-3"></img>

					<img src={IMG_SHP_01} className="shp-1"></img>
					<img src={IMG_SHP_02} className="shp-2"></img>
					<img src={IMG_SHP_04} className="shp-3"></img>
					<img src={IMG_SHP_03} className="shp-4"></img>
				</ServiceDiv>
				<Footer1></Footer1>
			</Wrapper2>
		</Container>
	)
}

const Wrapper = styled.div`
  position: relative;
`

const Wrapper2 = styled.div`
	max-width: ${p => p.theme.maxWidth};
	margin: auto;
	padding: 0px 100px 0px 100px;
	@media screen and (max-width: 950px) {
		padding: 0px 30px 0px 30px;
	}

	@media screen and (max-width: 425px) {
		padding: 0px 10px 0px 10px;
	}
`

export const Title1Div = styled.div`
	text-align: center;
	margin-top: 80px;
	h1 {
		font-family: 'Unbounded';
		font-style: normal;
		font-weight: 400;
		font-size: 60px;
		line-height: 104px;
		color: ${p => p.theme.fontColor2};

		@media screen and (max-width: 846px) {
			font-size: 40px;
			line-height: 60px;
		}

		@media screen and (max-width: 420px) {
			font-size: 30px;
			line-height: 40px;
		}
	}

	h2 {
		width: 57%;

		margin: auto;
		margin-top: 50px;
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 30px;
		text-align: center;
		color: rgba(255, 255, 255, 0.6);
		@media screen and (max-width: 700px) {
			width: 80%;
			font-size: 18px;
			line-height: 25px;
		}
		@media screen and (max-width: 420px) {
			width: 90%;
			font-size: 16px;
			line-height: 25px;
		}
	}
`

const ImgDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-top: 30px;
	button {
		border: none;
		outline: none;
		padding: 7px 14px !important;
		font-size: 18px;
		line-height: 18px;
		background: #EDAE49;
		font-family: 'IBM Plex Sans';

		text-align: center;
		color: ${p => p.theme.fontColor1};

		&:hover {
			background: #EDAE49;
			color: ${p => p.theme.fontColor1};
		}
		margin: auto;
	}
	.images {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;

		@media screen and (max-width: 1400px) {
			flex-direction: column;
		}
		img {
			width: 390px;
			border-radius: 10px;

			@media screen and (max-width: 430px) {
				width: 100%;
			}
		}
	}

`

const Title1 = styled.h1`
	font-family: 'Unbounded';
	font-style: normal;
	font-weight: 400;
	font-size: 88px;
	line-height: 104px;
	color: ${p => p.theme.fontColor2};
	padding: 64px 0;
	width: 650px;
	
	@media screen and (max-width: 1400px) {
		text-align: center;
		width: 100%;
	}

	@media screen and (max-width: 726px) {
		width: 100%;
		font-size: 68px;
		line-height: 90px;
	}

	@media screen and (max-width: 500px) {
		font-size: 40px;
		line-height: 60px;
	}
`

const OptionContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 20px;

	@media screen and (max-width: 1400px) {
		flex-direction: column;
		align-items: center;
	}
`

const OptionDiv = styled.div`
	color: #ffffff;
	width: 400px;
	@media screen and (max-width: 440px) {
		width: 100%;
	}

	h1 {
		color: rgba(255, 255, 255, 0.55);
		font-family: 'Rubik';
		font-weight: 600;
		font-size: 32px;
		line-height: 44px;
	}
	ul {
		list-style-type: disc;
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 33px;
		color: rgba(255, 255, 255, 0.8);
		padding: 0 30px;
		li {
			margin-bottom: 50px;
		}
	}	
	img {
		@media screen and (max-width: 440px) {
			width: 100%;
		}
	}
`

export const ServiceDiv = styled.div`
	margin-top: 40px;
	position: relative;
	width: 100%;
	height: 1050px;
	overflow: hidden;

	h1 {
		font-family: 'Unbounded';
		font-weight: 400;
		font-size: 72px;
		line-height: 88px;
		color: #FFFFFF;
		margin-top: 10px;
		@media screen and (max-width: 550px) {
			font-size: 42px;
			line-height: 68px;
		}
	}

	h2 {
		font-weight: 100;
		font-size: 24px;
		line-height: 33px;
		color: rgba(255, 255, 255, 0.8);
		width: 530px;
		margin-top: 25px;

		@media screen and (max-width: 560px) {
			width: 100%;
		}
	}

	button {
		background: #FFFFFF;
		border-radius: 36px;
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 18px;
		color: #000000;
		padding: 24px 48px;
		margin-top: 50px;

		&:hover {
			background: white;
			color: ${p => p.theme.fontColor1};
		}

	}
	.ser-1 {
		position: absolute;
		top: 0;
		left: 924px;
	}
	.ser-2 {
		position: absolute;
		left: 590px;
		top: 270px;
	}
	.ser-3 {
		position: absolute;
		left: 255px;
		top: 530px;
	}

	.shp-1 {
		position: absolute;
		top: 50px;
		left: 400px;
	}

	.shp-2 {
		position: absolute;
		bottom: 80px;
		left: 30px;
	}

	.shp-3 {
		position: absolute;
		bottom: 400px;
		left: 450px;
		width: 250px;
	}

	.shp-4 {
		position: absolute;
		bottom: 300px;
		left: 980px;
		width: 250px;
	}
`

export default Landing;