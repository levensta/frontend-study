/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    let arrPromises = operations.map(operation => {
        return new Promise(function(resolve, reject) {
            operation(function next(error, result) {
                error === null ?
                    resolve(result): reject(error);
            });
        });
    });

    Promise.all(arrPromises)
        .then(result => {
            callback(null, result);
        })
        .catch(callback);
};