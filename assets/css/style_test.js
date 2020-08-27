import React from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";

export const OptionBtn = styled.button`
	@import url("https://fonts.googleapis.com/css2?family=Poor+Story&display=swap");
	font-family: "Poor Story", cursive;

	width: 100%;
	background: #eeeeee !important;
	color: #000000 !important;
	border: none;

	display: block;
	font-size: 20px;
	white-space: pre-line;

	&:focus {
		background: #eeeeee;
		color: #000000;
	}
	&:active {
		background: #eeeeee;
		color: #000000;
	}

	@media (hover: hover) and (pointer: fine) {
		&:hover {
			background: #be2edd !important;
			color: #ffffff !important;
		}
	}
`;

export const optionCol = { xs: 16, sm: 14, md: 10, lg: 8, xl: 8 };

// background: #0984e3;
