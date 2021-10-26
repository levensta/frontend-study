/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {

    function removeSharp(item, index) {
        return (item.slice(1));
    }

    function getTags(item, index) {
        return (item[0] === '#')
    }

    var tweetWords = [];
    tweetWords = tweet.split(' ');

    return (tweetWords.filter(getTags).map(removeSharp))
};
