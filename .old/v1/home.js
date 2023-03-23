var words = [
    "a Hayesman",
    "Domincan and Puerto Rican",
    "1 of 7 Children",
    "Bronx Made",
];

/*Alerting User Email has been Sent*/

function MessageSent() {
    user = document.getElementById("specificSizeInputName").value;
    username = document.getElementById("specificSizeInputGroupUsername").value;
    subject_line = document.getElementById("specificSizeInputSubject").value;
    email =
        username + "@" + document.getElementById("specificSizeSelect").value;
    message = document.getElementById("contact-message").value;

    alert(`Hello ${user}! Your message has been sent to me. Please wait up to 24hrs for response time.\n
    For more immediate response, please reach out to me on other platforms. Thank you.
    \n\nRegards,\n\tSantiago\n\tsjrodriguez@gmail.com`);
}

/*
Adopted from https://codepen.io/rasifederico/pen/XWEamJX
*/

var counter = 0;
var i = getRandomInt(0, words.length - 1);

var text = document.getElementById("message");

var stepper = setInterval(() => {
    step();
}, 200);
var delInterval = null;
var delTimeout = null;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function delIntervalCallback() {
    delInterval = setInterval(() => {
        del();
    }, 100);
    clearTimeout(delTimeout);
}

function del() {
    if (counter == 0) {
        let newIndex = getRandomInt(0, words.length - 1);
        while (newIndex == i) {
            newIndex = getRandomInt(0, words.length - 1);
        }
        i = newIndex;
        clearInterval(delInterval);
        stepper = setInterval(() => {
            step();
        }, 200);
    } else {
        text.textContent = text.textContent.slice(0, -1);
        counter--;
    }
}

function step() {
    if (counter >= words[i].length) {
        clearInterval(stepper);
        delTimeout = setTimeout(() => {
            delIntervalCallback();
        }, 2000);
    } else {
        text.textContent += words[i][counter];
        counter++;
    }
}
