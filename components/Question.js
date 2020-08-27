import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import list from "../assets/list.json";
import { OptionBtn, optionCol } from "../assets/css/style_test";
import { Texty, Paragraphy } from "../assets/css/style_result";

const Question = ({ index, handler }) => {
	const q = list.arr;

	const click = (ans) => {
		if (document) {
			const list = document.getElementsByClassName("optionBtn");
			list[ans - 1].blur();
		}
		handler(ans);
	};

	return (
		<>
			<Row justify="center" align="middle">
				<Col {...optionCol}>
					<Texty top={100} font={20}>
						{q[index - 1].id}번
					</Texty>
				</Col>
			</Row>

			<Row justify="center" align="middle">
				<Col {...optionCol}>
					<Texty top={20} font={25}>
						{q[index - 1].q1}
					</Texty>
				</Col>
			</Row>
			{q[index - 1].q2 ? (
				<>
					<Row justify="center" align="middle">
						<Col {...optionCol}>
							<Texty font={25}>{q[index - 1].q2}</Texty>
						</Col>
					</Row>
				</>
			) : (
				<></>
			)}

			<Row style={{ height: "50px" }}></Row>

			<Row justify="space-around">
				<Col {...optionCol}>
					<OptionBtn
						className="optionBtn"
						block
						onClick={() => click(1)}
					>
						{q[index - 1].a1}
					</OptionBtn>
				</Col>
			</Row>
			<Row justify="space-around">
				<Col {...optionCol}>
					<OptionBtn
						className="optionBtn"
						block
						style={{ marginTop: "20px" }}
						onClick={() => click(2)}
					>
						{q[index - 1].a2}
					</OptionBtn>
				</Col>
			</Row>
		</>
	);
};

export default Question;
