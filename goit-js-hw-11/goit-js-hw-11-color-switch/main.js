"use strict";
const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548"
];

const refs = {
    div: document.querySelector("div"),
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]')
};

const switchColor = {
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.timer = setInterval(() => {
            const colorNumber = randomIntegerFromInterval(0, colors.length);
            refs.div.style.background = colors[colorNumber];
        }, 1000);
    },
    stop() {
        this.isActive = false;
        clearInterval(this.timer);
    }
};

refs.startBtn.addEventListener("click", switchColor.start.bind(switchColor));
refs.stopBtn.addEventListener("click", switchColor.stop.bind(switchColor));

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
