var d, hours, minutes, time, message;

// actual hours and minutes
d = new Date();
hours = d.getHours();
minutes = d.getMinutes();

// hours always has two digits
if (hours < 10) {
    hours = "0" + hours;
}   else {
    hours = hours.toString();
}
// minutes always has two digits
if (minutes < 10) {
    minutes = "0" + minutes;
}   else {
    minutes = minutes.toString();
}
// connecting hours minutes to a four digit numberS
time = Number(hours + minutes);

if (time >= 0000 && time < 1200) {
    message = "Good morning!";
} else if (time >= 1200 && time < 1300) {
    message = "Good noon!";
} else if (time >= 1300 && time < 1700) {
    message = "Good afternoon!";
} else if (time >= 1700 && time < 2200) {
    message = "Good evening!";
} else if (time >= 2200 && time < 2359) {
    message = "Good night!";
}

alert(message);