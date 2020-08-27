import React from "react";
import { Row, Col, Button } from "antd";
import { useRouter } from "next/router";
import {
	WidthImg,
	centerCol,
	wideCol,
	Texty,
	ActionBtn,
} from "../assets/css/style_result";

const Home = () => {
	const router = useRouter();

	const toTest = () => {
		router.push("/test");
	};

	return (
		<>
			<Row justify="center">
				<Col {...wideCol}>
					<Texty strong top={100} bottom={20} font={20}>
						우당탕탕 코로나시대 당신의 직업은?!
					</Texty>
				</Col>
			</Row>

			<Row justify="center">
				<Col {...centerCol}>
					<WidthImg src={require("../assets/images/virus.png")} />
				</Col>
			</Row>

			<Row justify="center">
				<Col {...wideCol}>
					<ActionBtn
						top={20}
						border={"#be2edd"}
						back={"#be2edd"}
						color={"#FFFFFF"}
						onClick={toTest}
					>
						테스트 시작!
					</ActionBtn>
				</Col>
			</Row>

			<Row style={{ height: "200px" }}></Row>
		</>
	);
};

export default Home;
