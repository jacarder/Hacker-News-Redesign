interface TimeCollection {
	years: number;
	months: number;
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}
export const createTimeLabel = (
	unixDate: number,
	currentDate: Date = new Date()
) => {
	const dateObj = new Date(unixDate * 1000);
	//	https://javascript.plainenglish.io/how-to-get-the-difference-in-months-between-two-dates-in-javascript-85c9b5acfd5c
	let months;
	months = Math.abs(dateObj.getFullYear() - currentDate.getFullYear()) * 12;
	months -= currentDate.getMonth();
	months += dateObj.getMonth();
	months = months <= 0 ? 0 : months;
	const milliseconds = currentDate.getTime() - dateObj.getTime(),
		seconds = Math.floor(milliseconds / 1000),
		minutes = Math.floor(seconds / 60),
		hours = Math.floor(minutes / 60),
		days = Math.floor(hours / 24),
		/**
		 * TODO handle number of days per month, but iterating through
		 * each month index to get number of days per month. This will then give us
		 * accurate days + number of years
		 */
		years = Math.floor(months / 12);
	const time: TimeCollection = {
		years: years,
		months: months,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds
	};
	const selectedTimeText = Object.keys(time).find(
		(key, index) => time[key as keyof TimeCollection] !== 0
	);
	return `${time[selectedTimeText as keyof TimeCollection]
		} ${selectedTimeText} ago`;
};
