import React, { useState, createContext } from "react";

export const BookingFormContext = createContext(undefined);

export const BookingFormProvider = ({ children }) => {
	const [availableTimes, setAvailableTimes] = useState([
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
	]);

	return (
		<BookingFormContext.Provider
			value={[availableTimes, setAvailableTimes]}
		>
			{children}
		</BookingFormContext.Provider>
	);
};
