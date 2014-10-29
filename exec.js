var exec = require('child_process').exec;
var vow = require('vow');

module.exports = function (cmd) {
    var defer = vow.defer();
    exec(cmd, function (err, stdout, stderr) {
        var val = {
            err: err,
            stderr: stderr,
            stdout: stdout
        };

        if (err) {
            defer.reject(val);
        } else {
            defer.resolve(val);
        }
    });
    return defer.promise();
};
