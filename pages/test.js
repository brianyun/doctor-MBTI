import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { ADD_ANSWER } from "../reducers/answer";
import Question from "../components/Question";
import ProgressBar from "../components/ProgressBar";
import list from "../assets/list.json";

const Test = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const maxCount = list.arr.length;
	const [answerArr, setAnswerArr] = useState([]);
	const [index, setIndex] = useState(1);

	const handler = (ans) => {
		setAnswerArr((prevArr) => [...prevArr, ans]);

		if (index === maxCount) {
			router.push("/loading");
			return;
		}
		setIndex(index + 1);
	};

	useEffect(() => {
		if (answerArr.length === maxCount) {
			// console.log("AnswerArr is: " + answerArr);
			dispatch({
				type: ADD_ANSWER,
				data: answerArr,
			});
		}
	});

	return (
		<div>
			<div>
				<Question index={index} handler={handler} />
			</div>

			<ProgressBar i={index} length={maxCount} />
		</div>
	);
};

export default Test;
