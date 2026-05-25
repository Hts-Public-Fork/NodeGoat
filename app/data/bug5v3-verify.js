// Bug 5 v3 verify: should produce ONE pr-open + ONE pr-merge row,
// not three (cross-process dedup via pr_merge_events table).
module.exports.testFunction = function (req, res) {
    const userInput = req.query.cmd;
    // SAST trigger — single Command Injection
    const { exec } = require('child_process');
    exec('echo ' + userInput, (err, stdout) => {
        res.send(stdout);
    });
};
