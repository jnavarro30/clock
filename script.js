
const clock = () => {

    const hourHand = document.querySelector(".hour");
    const minuteHand = document.querySelector(".minute");
    const secondHand = document.querySelector(".second");

    let d = new Date(),
        seconds = d.getSeconds() / 60,
        minutes = (seconds + d.getMinutes()) / 60,
        hours = (minutes + d.getHours()) / 12;

        const setRotation = (elem, time) => {
            elem.style.setProperty("--rotation", time * 360);
        };

        setRotation(hourHand, hours);
        setRotation(minuteHand, minutes);
        setRotation(secondHand, seconds);

};

setInterval(clock, 10);