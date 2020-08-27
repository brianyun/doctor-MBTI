import React from "react";
import styled from "styled-components";
import { Typography, Button } from "antd";
const { Text, Paragraph } = Typography;

export const halfCol = { xs: 9, sm: 3, md: 3, lg: 3, xl: 3 };
export const fullCol = { xs: 18, sm: 18, md: 9, lg: 9, xl: 6 };
export const centerCol = { xs: 16, sm: 16, md: 4, lg: 4, xl: 4 };
export const wideCol = { xs: 18, sm: 18, md: 18, lg: 18, xl: 18 };

export const HeightImg = styled.img`
	display: block;
	margin: 30px auto 30px auto;
	height: 100%;
	width: auto;
`;

export const WidthImg = styled.img`
	display: block;
	margin: 30px auto 30px auto;
	width: 100%;
	height: auto;
`;

export const WidthDiv = styled.div`
	display: block;
	margin: 30px auto 30px auto;
	width: 100%;
	height: 100px;
`;

export const Texty = styled(Text)`
	@import url("https://fonts.googleapis.com/css2?family=Poor+Story&display=swap");
	font-family: "Poor Story", cursive;

	text-align: center;
	display: block;
	margin-top: ${(props) => (props.top ? props.top : 0)}px;
	margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)}px;
	font-size: ${(props) => (props.font ? props.font : 0)}px;
	color: ${(props) => (props.color ? props.color : "#333333")};
`;

export const Paragraphy = styled(Paragraph)`
	@import url("https://fonts.googleapis.com/css2?family=Poor+Story&display=swap");
	font-family: "Poor Story", cursive;

	text-align: center;
	display: block;
	margin-top: ${(props) => (props.top ? props.top : 0)}px;
	margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)}px;
	font-size: ${(props) => (props.font ? props.font : 0)}px;
	color: ${(props) => (props.color ? props.color : "#333333")};
`;

export const ActionBtn = styled(Button)`
	@import url("https://fonts.googleapis.com/css2?family=Poor+Story&display=swap");
	font-family: "Poor Story", cursive;

	display: block;
	margin-top: ${(props) => (props.top ? props.top : 40)}px;
	width: 100%;
	height: 40px;

	border-color: ${(props) => (props.border ? props.border : "#333333")};
	background-color: ${(props) => (props.back ? props.back : "#FFFFFF")};
	color: ${(props) => (props.color ? props.color : "#000000")};
`;
