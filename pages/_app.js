import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import "react-activity/dist/react-activity.css";

const App = ({ Component }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>우당탕탕 코로나시대 당신의 직업은?!</title>
				<link rel="shortcut icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
				/>
				<script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
			</Head>
			<Component />
		</>
	);
};

App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	store: PropTypes.object,
};

export default withRedux((initialState, options) => {
	const store = createStore(reducer, initialState);
	return store;
})(App);
