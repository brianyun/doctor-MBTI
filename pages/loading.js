import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Typography, Row, Col } from "antd";
import { useSelector } from "react-redux";
const { Text } = Typography;

import { ADD_URL } from "../reducers/answer";
import { MAKE_DIRECT_FALSE } from "../reducers/answer";

import db from "../back/firestore";
import storage from "../back/cloudStorage";
import { v4 as uuid } from "uuid";
import calculator from "../back/calculator";
import result from "../assets/result.json";

import { WidthDiv } from "../assets/css/style_result";
import { Spinner } from "react-activity";

const Loading = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { ans } = useSelector((state) => state.answer);
	const { url } = useSelector((state) => state.answer);

	const [screenshotUrl, setScreenshotUrl] = useState(null);
	const [thumbUrl, setThumbUrl] = useState(null);
	const [v, setV] = useState(null);

	useEffect(() => {
		if (ans) {
			setV(result[calculator(ans)]);

			const now = new Date();
			const uid = uuid();

			const userObj = {
				answer: ans,
				type: calculator(ans),
				created_at: now,
				updated_at: now,
			};

			db.collection("results")
				.doc(uid)
				.set(userObj)
				.then((res) => {})
				.catch((error) => {
					alert("error: " + error.message);
					console.log(error);
				});
		} else {
			router.push("/result/".concat(calculator([])));
		}
	}, [ans]);

	useEffect(() => {
		if (v) {
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
		}
	}, [v]);

	useEffect(() => {
		if (screenshotUrl && thumbUrl) {
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
		dispatch({
			type: MAKE_DIRECT_FALSE,
		});

		router.push("/result/".concat(calculator(ans)));
	}, [url["thumbUrl"]]);

	return (
		<>
			<Row justify="center">
				<Col xs={16} sm={14} md={10} lg={8} xl={8}>
					<WidthDiv>
						<Spinner />
					</WidthDiv>
				</Col>
			</Row>
			<Row justify="center">
				<Col xs={16} sm={14} md={10} lg={8} xl={8}>
					<Text
						style={{
							textAlign: "center",
							display: "block",
							marginTop: "30px",
							fontSize: "20px",
						}}
					>
						분석중..
					</Text>
				</Col>
			</Row>
		</>
	);
};

export default Loading;
