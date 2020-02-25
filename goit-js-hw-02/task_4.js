'use strict'
const formatString = function (string) {
    let shortString = string;
    if (string.length > 40) {
        shortString = `${string.slice(0, 40)}...`;
    }
    return shortString;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
    formatString(
        "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
    )
);

