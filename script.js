setInterval(() => {
	showTime();
}, 1000);

const showTime = () => {
	let time = new Date();
	let hour = time.getHours();
	let minute = time.getMinutes();
	let second = time.getSeconds();
	let am_pm = "AM";
	if (hour > 12) {
		hour = hour - 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hour = 12;
		am_pm = "AM";
	}

	hour = getTimePrefix(hour);
	minute = getTimePrefix(minute);
	second = getTimePrefix(second);

	const currentTime = `${hour}:${minute}:${second} ${am_pm}`;

	document.querySelector(".clock").innerHTML = currentTime;

	showDate();
};

const getTimePrefix = (num) => {
	return num < 10 ? "0" + num : num;
};

const showDate = () => {
	let time = new Date();
	let date = time.getDate();
	let day = time.getDay();
	let month;

	day =
		day === 0
			? "Sunday"
			: day === 1
			? "Monday"
			: day === 2
			? "Tuesday"
			: day === 3
			? "Wednesday"
			: day === 4
			? "Thursday"
			: day === 5
			? "Friday"
			: day === 6
			? "Saturday"
			: "";

	const allMonths = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	month = allMonths[time.getMonth()];

	const currentDate = `<p>${day}</p>
        <br />
        <h2>${date} ${month}</h2>
    `;

	document.querySelector(".date-container").innerHTML = currentDate;
};
