/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {

    function tagToLowerCase(item, index) {
        return item.toLowerCase();
    }

    if (hashtags.length) {
        // KO ????
        // hashtags = hashtags.map(tagToLowerCase).filter((item, index) => hashtags.indexOf(item) === index);
        hashtags = hashtags.map(tagToLowerCase);
        hashtags = hashtags.filter((item, index) => hashtags.indexOf(item) === index);
    }

    return hashtags.join(", ");
};


// .filter((item, index) => {
//     return hashtags.indexOf(item) === index
// }).join(", ");