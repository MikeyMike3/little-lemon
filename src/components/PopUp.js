import React from "react";

export const PopUp = (props) => {
	const handleEvent = (e) => {
		e.preventDefault();
		props.setPopUpClicked(false);
	};
	return (
		<div className="pop-up-container">
			<div className="pop-up">
				<h4>Reservation successfully made!</h4>
				<button className="confirm" onClick={handleEvent}>
					Confirm
				</button>
			</div>
		</div>
	);
};
