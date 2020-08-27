import React from "react";
import { Progress, Row, Col } from "antd";

const ProgressBar = ({ i, length }) => {
	return (
		<>
			<div className="pagination">
				<Row
					justify="center"
					align="middle"
					style={{ marginTop: "100px" }}
				>
					<Col xs={18} sm={18} md={16} lg={14} xl={12}>
						<h5>
							{i}/{length}
						</h5>
						<Progress
							strokeColor="#be2edd"
							percent={(i / length) * 100}
							showInfo={false}
						></Progress>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default ProgressBar;
