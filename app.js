const _date = document.querySelector(".date");
const _time = document.querySelector(".time");
const _btn = document.querySelector(".btn");
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
	"No Class Right Now",
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
	if (currDate.getHours() >= 9 && currDate.getHours() <= 16)
		j = currDate.getHours() - 9;
	else j = 7;
	className.innerHTML = classNames[timeTable[i][j]];
	facultyName.innerHTML = facultyNames[timeTable[i][j]];
	if (timeTable[i][j] != 0) {
		setInterval(() => {
			window.location.href = `https://meet.google.com/${
				meetLinks[timeTable[i][j]]
			}`;
		}, 3000);
		classCode.innerHTML = `CSC40${timeTable[i][j]}`;
		_btn.innerHTML = "Join Class";
		classLink.setAttribute(
			"href",
			`https://meet.google.com/${meetLinks[timeTable[i][j]]}`
		);
	} else {
		if (currDate.getHours() == 16 && i >= 0 && i <= 3) {
			className.innerHTML = "Join Practicum Class";
			_btn.innerHTML = "Join Practicum Class";
			classLink.setAttribute("href", "https://classroom.google.com/");
		} else {
			_btn.innerHTML = "No Class Right Now";
			classLink.setAttribute("href", "./timetable.png");
		}
	}
};
setTime();
setInterval(setTime, 1000);
