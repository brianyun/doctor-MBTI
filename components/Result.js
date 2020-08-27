import React, { useState, useEffect } from "react";
import { Row, Col, Button, Typography } from "antd";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { FacebookProvider, Share } from "react-facebook";
import storage from "../back/cloudStorage";

import { ADD_URL } from "../reducers/answer";
import { MAKE_DIRECT_TRUE } from "../reducers/answer";

import {
	halfCol,
	fullCol,
	centerCol,
	WidthImg,
	WidthDiv,
	Texty,
	Paragraphy,
	ActionBtn,
} from "../assets/css/style_result";
import { Spinner } from "react-activity";
import result from "../assets/result.json";

const Result = ({ name }) => {
	const v = result[name];
	const dispatch = useDispatch();
	const router = useRouter();

	const { url } = useSelector((state) => state.answer);
	const { isDirect } = useSelector((state) => state.answer);

	const [screenshotUrl, setScreenshotUrl] = useState(null);
	const [thumbUrl, setThumbUrl] = useState(null);

	useEffect(() => {
		setScreenshotUrl(url["screenshotUrl"]);
		setThumbUrl(url["thumbUrl"]);
	}, [url]);

	useEffect(() => {
		if (isDirect) {
			storage
				.ref()
				.child(v["screenshot"])
				.getDownloadURL()
				.then((url) => {
					setScreenshotUrl(url);
				})
				.catch((err) => {
					return;
				});

			storage
				.ref()
				.child(v["thumbnail"])
				.getDownloadURL()
				.then((url) => {
					setThumbUrl(url);
				})
				.catch((err) => {
					return;
				});
		} else {
			dispatch({
				type: MAKE_DIRECT_TRUE,
			});
		}
	}, [isDirect]);

	useEffect(() => {
		if (isDirect && screenshotUrl && thumbUrl) {
			dispatch({
				type: ADD_URL,
				data: {
					screenshotUrl: screenshotUrl,
					thumbUrl: thumbUrl,
				},
			});
		}
	}, [screenshotUrl, thumbUrl]);

	useEffect(() => {
		try {
			Kakao.init("0bea3f30baffa17a95149953e8addd7e");
		} catch (err) {
			console.log(err);
		}
	}, []);

	const toTop = () => {
		router.push("/");
	};

	const toKakao = () => {
		try {
			Kakao.Link.sendDefault({
				objectType: "feed",
				content: {
					title: "우당탕탕 코로나시대 당신의 직업은?!",
					description: v["title"],
					imageUrl: thumbUrl,
					link: {
						mobileWebUrl: "https://doctor-mbti.web.app",
						webUrl: "https://doctor-mbti.web.app",
					},
				},
				buttons: [
					{
						title: "나도 해볼래요",
						link: {
							mobileWebUrl: "https://doctor-mbti.web.app",
							webUrl: "https://doctor-mbti.web.app",
						},
					},
				],
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<Row justify="center">
				<Texty top={30} font={15} strong>
					우당탕탕 코로나시대 당신의 직업은?!
				</Texty>
			</Row>
			<Row justify="center">
				<Texty strong top={10} font={30} color={"#be2edd"}>
					{v["title"]}
				</Texty>
			</Row>
			<Row justify="center">
				<Col {...centerCol}>
					{thumbUrl ? (
						<WidthImg src={thumbUrl} />
					) : (
						<>
							<WidthDiv>
								<Spinner />
							</WidthDiv>
						</>
					)}
				</Col>
			</Row>
			<Row justify="center">
				<Texty strong top={0} font={20} color={"#be2edd"}>
					{v["subtitle"]}
				</Texty>
			</Row>
			<Row justify="center">
				<Col {...fullCol}>
					<Paragraphy top={20} font={15}>
						{v["description"]}
					</Paragraphy>
				</Col>
			</Row>

			<Row justify="center">
				<Col {...fullCol}>
					<ActionBtn>
						<Texty font={15} color={"#be2edd"}>
							현재 100명 중 {v["competition"]}명이 경합중입니다!
						</Texty>
					</ActionBtn>
				</Col>
			</Row>

			<Row justify="center">
				<Col {...fullCol}>
					<ActionBtn top={10} onClick={toTop}>
						<Texty font={15}>테스트 다시 해보기</Texty>
					</ActionBtn>
				</Col>
			</Row>

			<Row justify="center">
				<Col xs={7} sm={7} md={4} lg={4} xl={4}>
					<ActionBtn>
						<a href={screenshotUrl} download>
							<Texty font={15}>이미지 저장</Texty>
						</a>
					</ActionBtn>
				</Col>
				<Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
				<Col xs={7} sm={7} md={4} lg={4} xl={4}>
					<ActionBtn
						onClick={toKakao}
						style={{ backgroundColor: "#FEE500" }}
					>
						<Texty strong font={15} color={"#000000"}>
							카카오 공유
						</Texty>
					</ActionBtn>
				</Col>
				<Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
				<Col xs={7} sm={7} md={4} lg={4} xl={4}>
					<FacebookProvider appId="311186230188498">
						<Share href="https://doctor-mbti.web.app">
							{({ handleClick }) => (
								<ActionBtn
									onClick={handleClick}
									style={{
										backgroundColor: "#4267B2",
									}}
								>
									<Texty font={15} color={"#FFFFFF"}>
										페이스북 공유
									</Texty>
								</ActionBtn>
							)}
						</Share>
					</FacebookProvider>
				</Col>
			</Row>

			<Row style={{ height: "400px" }}></Row>
		</>
	);
};

export default Result;
