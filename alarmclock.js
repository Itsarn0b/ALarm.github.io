const CurrentTime = document.querySelector('h1'),
    content = document.querySelector(".content"),
    selectMenu = document.querySelectorAll('select'),
    AlarmBtn = document.querySelector("button");

let alarmTime, isAlrmSet = false;
ringtone = new Audio("y2mate.com - Ringtone for Zhongli xD.mp3")



for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
setInterval(() => {
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";
    if (h >= 12) {
        h = h - 12;
        ampm = "PM";

    }
    h = h == 0 ? h = 12 : h;
    //if hour value is 0,set this value to 12
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    CurrentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime == `${h}:${m} ${ampm}`) {
        console.log("arlrm ringing...")
        ringtone.play();
        ringtone.loop = true;
    }
}, 1000);



function setAlarm() {
    if (isAlrmSet) { //if isAlrmset is true
        alarmTime = ""; //clear the value of alarm Time
        ringtone.pause(); //pause the ringtone
        content.classList.remove("disable");
        setAlarm.innerText = "Set Alarm";
        return isAlrmSet = falsel //return isAlram value false
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert('please selct a valid time To set Alarm')
    }
    isAlrmSet = true;
    alarmTime = time;
    content.classList.add("disable");
    AlarmBtn.innerText = "Clear Alarm";

}
AlarmBtn.addEventListener('click', setAlarm)