module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    subscribers: [],

    on: function (event, subscriber, handler) {
        if (!this.subscribers.includes(subscriber)) {
            this.subscribers.push(subscriber);
        }
        if (!subscriber.hasOwnProperty(event)) {
            subscriber[event] = [];
        }
        subscriber[event].push(handler);
        return this;
    },
    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (this.subscribers.includes(subscriber)) {
            if (subscriber.hasOwnProperty(event)) {
                delete subscriber[event];
            }
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        this.subscribers.map(subscriber => {
            if (subscriber.hasOwnProperty(event)) {
                for (let i = 0; i < subscriber[event].length; ++i) {
                    subscriber[event][i].call(subscriber);
                }
            }
        });
        return this;
    }
};

// for (let i = 0; i < this.subscribers.length; ++i) {
//     let currentSubscriber = this.subscribers[i];
//     if (currentSubscriber.hasOwnProperty(event)) {
//         for (let j = 0; j < currentSubscriber[event].length; ++j) {
//             currentSubscriber[event][j].call(currentSubscriber);
//         }
//     }
// }