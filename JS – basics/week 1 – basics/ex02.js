/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    if (minutes + interval > 59) {
        hoursInterval = Math.floor((minutes + interval) / 60);
        hours += hoursInterval;
        if ((minutes + interval) % 60 == 0) {
            minutes = 0;
        }
        else {
            minutes = (minutes + interval - (hoursInterval * 60));
        }
        hours = hours % 24;
    }
    else {
        minutes += interval;
    }
    var formatedTime = "";
    if (hours >= 0 && hours < 10) {
        formatedTime += "0";
    }
    formatedTime += hours + ":"
    if (minutes >= 0 && minutes < 10) {
        formatedTime += "0";
    }
    formatedTime += minutes;
    return formatedTime;
};
