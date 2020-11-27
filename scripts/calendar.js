/*
 * Group: 					Nintendo Boyz
 * Script developed by: 	Connor Mackay
 */

const NUM_ROWS = 6;
const NUM_WEEKDAYS = 7;
let numDays = NUM_ROWS * NUM_WEEKDAYS;

let updatedDate = new Date();
updatedDate.setDate(1);

function Month(_month_name, _num_days) {
	this.month_name = _month_name;
	this.num_days = _num_days; // How many days are in the month
}

function Event(_event_name, _date) {
	this.eventName = _event_name;

	if (_date instanceof Date) {
		this.date = _date;
	} else {
		this.date = new Date();
	}
}

let eventList = [ 	new Event("Quiz Night", new Date("11/12/2020")),
					new Event("Smash Bros. Tourna.", new Date("12/4/2020")),
					new Event("Gaming Night", new Date("1/11/2021"))
				];

console.log(eventList);

let monthList =  [ "January", 
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
					"December" ];
					
let calendarTitle = document.getElementById("calendarMonthYearName");
let calendarDayNumberList = document.getElementsByClassName("calendarDayNumber");
let calendarEventNameList = document.getElementsByClassName("calendarEventName");

/*
 * Functions
 */

function renderCalendar(dayOneIndex) {
	let tmpDate = new Date();
	tmpDate.setFullYear(updatedDate.getFullYear(), updatedDate.getMonth(), updatedDate.getDate()-dayOneIndex);
	
	let lastMonth = tmpDate.getMonth();
	
	calendarTitle.innerHTML = monthList[updatedDate.getMonth()] + " " + updatedDate.getFullYear();

	let currentDate = new Date();
	for (let i=0; i < calendarDayNumberList.length; i++) {
		let element = calendarDayNumberList.item(i);
		let elementName = calendarEventNameList.item(i);
		
		elementName.innerHTML = "";

		if (tmpDate.getDate() === currentDate.getDate() &&
			tmpDate.getMonth() === currentDate.getMonth() &&
			tmpDate.getFullYear === currentDate.getFullYear) {
			element.parentElement.id = "currentDay";
		} else {
			if (element.parentElement.id == "currentDay") {
				element.parentElement.id = "";
			}
		}

		if (i < dayOneIndex || (i > dayOneIndex && tmpDate.getMonth() != lastMonth)) {
			element.className += " notInMonth";
		} else {
			lastMonth = tmpDate.getMonth();
			element.className = "calendarDayNumber";
		}

		for (let j=0; j < eventList.length; j++) {
			if (eventList[j].date.getDate() == tmpDate.getDate() &&
				eventList[j].date.getMonth() == tmpDate.getMonth() &&
				eventList[j].date.getFullYear() == tmpDate.getFullYear()) {
				elementName.innerHTML = eventList[j].eventName;
			}
		}
		
		element.innerHTML = tmpDate.getDate();
		tmpDate.setDate(tmpDate.getDate()+1);
	}
}

// One Month Forward
function updateCalendarDatesForward() {
	// Correct the date
	if (updatedDate.getMonth() < 11) {
		updatedDate.setMonth(updatedDate.getMonth()+1);
	} else {
		updatedDate.setMonth(0);
		updatedDate.setFullYear(updatedDate.getFullYear()+1, updatedDate.getMonth(), 1);
	}
	
	let dayOneIndex = updatedDate.getDay();
	renderCalendar(dayOneIndex);
}



function updateCalendarDatesBackward() {
	// Correct the date
	if (updatedDate.getMonth() > 0) {
		updatedDate.setMonth(updatedDate.getMonth()-1);
	} else {
		updatedDate.setMonth(11);
		updatedDate.setFullYear(updatedDate.getFullYear()-1, updatedDate.getMonth(), 1);
	}
	
	let dayOneIndex = updatedDate.getDay();
	renderCalendar(dayOneIndex);
}

document.addEventListener("keyup", function() {
	let key = event.which;
	if (key == 39) { // Right arrow
		updateCalendarDatesForward();
	} else if (key == 37) { // Left arrow
		updateCalendarDatesBackward();
	}
});

renderCalendar(updatedDate.getDay());