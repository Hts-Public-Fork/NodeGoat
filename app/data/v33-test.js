// v33 carry-forward test — 1 SAST finding
module.exports.runCmd = function (req, res) {
    const { exec } = require('child_process');
    exec('echo ' + req.query.q, (e, out) => res.send(out));
};
// retrigger 1779699943
