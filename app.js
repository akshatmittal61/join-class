const _date = document.querySelector(".date");
const _time = document.querySelector(".time");
const classCode = document.querySelector(".class-code");
const className = document.querySelector(".class-name");
const facultyName = document.querySelector(".faculty-name");
const classLink = document.querySelector(".class-link");
const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const Months = [
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
const meetLinks = [
	"",
	"ndp-gadg-sax",
	"aua-yqww-jvz",
	"xyt-vxvq-njb",
	"bzy-nesy-gje",
	"zuw-gedr-njq",
	"pqe-agsq-fkx",
	"mwf-mjae-qxz",
];
const timeTable = [
	[4, 2, 3, 5, 0, 1, 1, 0],
	[2, 3, 5, 1, 0, 4, 3, 0],
	[3, 5, 4, 1, 0, 2, 6, 0],
	[5, 1, 4, 2, 0, 3, 7, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
];
const classNames = [
	"No Class this time",
	"DBMS",
	"DAA",
	"OS",
	"CN",
	"OOP",
	"CN Lab",
	"OOP Lab",
];
const facultyNames = [
	"",
	"Himani Joshi",
	"Dr. ShivDutt Sharma",
	"Sahil",
	"Ambigavathi Munusamy",
	"Minakshi Shastri",
	"Ambigavathi Munusamy",
	"Minakshi Shastri",
];
const setTime = () => {
	const currDate = new Date();
	_date.innerHTML = `${days[currDate.getDay()]}, ${currDate.getDate()} ${
		Months[currDate.getMonth()]
	}`;
	_time.innerHTML = Date().slice(16, 24);
	let i = +currDate.getDay() - 1,
		j = 0;
	/* if (currDate.getHours() < 10) j = 0;
	else if (currDate.getHours() < 11) j = 1;
	else if (currDate.getHours() < 12) j = 2;
	else if (currDate.getHours() < 13) j = 3;
	else if (currDate.getHours() < 14) j = 6;
	else if (currDate.getHours() < 15) j = 4;
	else if (currDate.getHours() < 16) j = 5; */
	if (currDate.getHours() >= 9 && currDate.getHours() <= 16)
		j = currDate.getHours() - 9;
	else j = 6;
	classCode.innerHTML =
		timeTable[i][j] !== 0 ? `CSC40${timeTable[i][j]}` : "-";
	className.innerHTML = classNames[+timeTable[i][j]];
	facultyName.innerHTML = facultyNames[+timeTable[i][j]];
	classLink.setAttribute(
		"href",
		`https://meet.google.com/${meetLinks[timeTable[i][j]]}`
	);
	if (timeTable[i][j] != 0) {
		setInterval(() => {
			console.log("now");
			window.location.href = `https://meet.google.com/${
				meetLinks[timeTable[i][j]]
			}`;
		}, 3000);
	}
};
setTime();
setInterval(setTime, 1000);
