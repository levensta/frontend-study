/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    Date.prototype.toIsoString = function() {
        var tzo = -this.getTimezoneOffset(),
            dif = tzo >= 0 ? '+' : '-',
            pad = function(num) {
                var norm = Math.floor(Math.abs(num));
                return (norm < 10 ? '0' : '') + norm;
            };
        return this.getFullYear() +
            '-' + pad(this.getMonth() + 1) +
            '-' + pad(this.getDate()) +
            'T' + pad(this.getHours()) +
            ':' + pad(this.getMinutes()) +
            ':' + pad(this.getSeconds()) +
            dif + pad(tzo / 60) +
            ':' + pad(tzo % 60);
    }

    var timeDate = new Date(date);

    var obj = {
        add: function (count, timestamp) {
            if (count < 0) {
                throw new TypeError("Invalid argument");
            }

            if (timestamp === "years") {
                timeDate.setFullYear(timeDate.getFullYear() + count);
            }
            else if (timestamp === "months") {
                timeDate.setMonth(timeDate.getMonth() + count);
            }
            else if (timestamp === "days") {
                timeDate.setDate(timeDate.getDate() + count);
            }
            else if (timestamp === "hours") {
                timeDate.setHours(timeDate.getHours() + count);
            }
            else if (timestamp === "minutes") {
                timeDate.setMinutes(timeDate.getMinutes() + count);
            }

            else {
                throw new TypeError("Invalid argument");
            }

            return this;
        },

        subtract: function (count, timestamp) {
            if (count < 0) {
                throw new TypeError("Invalid argument");
            }

            if (timestamp === "years") {
                timeDate.setFullYear(timeDate.getFullYear() - count);
            }
            else if (timestamp === "months") {
                timeDate.setMonth(timeDate.getMonth() - count);
            }
            else if (timestamp === "days") {
                timeDate.setDate(timeDate.getDate() - count);
            }
            else if (timestamp === "hours") {
                timeDate.setHours(timeDate.getHours() - count);
            }
            else if (timestamp === "minutes") {
                timeDate.setMinutes(timeDate.getMinutes() - count);
            }

            else {
                throw new TypeError("Invalid argument");
            }

            return this;
        },

        get value() {
            return timeDate.toIsoString().split('T').join(' ').slice(0, -9);
        }
    };
    return obj;
};
