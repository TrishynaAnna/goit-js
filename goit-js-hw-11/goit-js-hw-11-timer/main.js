'use strict';

const refs = {
    //   clockFace: document.querySelector('#timer-1'),
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
};


class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        //   console.log(selector);
        setInterval(() => {
            const currentTime = Date.now();
            this.deltaTime = targetDate - currentTime;
            if (this.deltaTime > 0) {
                updateClockFace(this.deltaTime);
            }
            else {
                this.deltaTime = 0;
                updateClockFace(this.deltaTime);
            }
        }, 1000);
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('May 31, 2020'),
});


function updateClockFace(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
}
