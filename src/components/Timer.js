import React from "react";
const CountDown = ({days = 0, hours = 0, minutes = 0, seconds = 0 }) => {
    const [paused, setPaused] = React.useState(false);
    const [over, setOver] = React.useState(false);
    const [[d, h, m, s], setTime] = React.useState([days, hours, minutes, seconds]);

    const tick = () => {
        if (paused || over) return;

        if (d===0 && h === 0 && m === 0 && s === 0) {
            setOver(true);
        } else if (h === 0 && m === 0 && s === 0) {
            setTime([d - 1, 59, 59, 59]);
        } else if (m === 0 && s === 0) {
            setTime([0, h - 1, 59, 59]);
        } else if (s == 0) {
            setTime([d, h, m - 1, 59]);
        } else {
            setTime([d, h, m, s - 1]);
        }
    };


    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    let resultDays = d < 10 ? '0' + d : d;
    let resultHours = h < 10 ? '0' + h : h;
    let resultMinutes = m < 10 ? '0' + m : m;
    let resultSeconds = s < 10 ? '0' + s : s;

    return (
        <div>
            <p> {resultDays} : {resultHours} : {resultMinutes} : {resultSeconds}</p>
            <div>{over ? "Time's up!" : ''}</div>
        </div>
    );
};

export default CountDown;