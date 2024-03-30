import React, { useContext } from "react";
import { useState } from "react";
import { BookingFormContext } from "./BookingFormContext";
import { PopUp } from "./PopUp";

export const BookingForm = () => {
	const [date, setDate] = useState("");
	const [resTime, setResTime] = useState("");
	const [guests, setGuests] = useState("");
	const [occasion, setOccasion] = useState("");

	const [popUpClicked, setPopUpClicked] = useState(false);

	const [availableTimes, setAvailableTimes] = useContext(BookingFormContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setDate("");
		setResTime("");
		setGuests("");
		setOccasion("");
		setPopUpClicked(true);
	};

	return (
		<>
			{popUpClicked && <PopUp setPopUpClicked={setPopUpClicked} />}

			<form onSubmit={handleSubmit}>
				<label htmlFor="res-date">Choose date</label>
				<input
					type="date"
					id="res-date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
				<label htmlFor="res-time">Choose time</label>
				<select
					id="res-time"
					value={resTime}
					onChange={(e) => setResTime(e.target.value)}
				>
					{availableTimes.map((time, index) => (
						<option key={index}>{time}</option>
					))}
				</select>
				<label htmlFor="guests">Number of guests</label>
				<input
					type="number"
					placeholder="1"
					min="1"
					max="10"
					id="guests"
					value={guests}
					onChange={(e) => setGuests(e.target.value)}
				/>
				<label htmlFor="occasion">Occasion</label>
				<select
					id="occasion"
					value={occasion}
					onChange={(e) => setOccasion(e.target.value)}
				>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
				<input
					className="submit-btn"
					type="submit"
					value="Make Your reservation"
				/>
			</form>
		</>
	);
};
