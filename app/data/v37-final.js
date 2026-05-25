// v37 final validation — single SAST trigger
module.exports.cmdHandler = function (req, res) {
    const { exec } = require('child_process');
    exec('printf ' + req.query.input, (e, out) => res.send(out));
};
