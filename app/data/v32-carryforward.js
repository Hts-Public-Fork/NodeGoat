// v32 carry-forward test — single SAST trigger
module.exports.runCmd = function (req, res) {
    const userInput = req.query.cmd;
    const { exec } = require('child_process');
    exec('echo ' + userInput, (err, stdout) => {
        res.send(stdout);
    });
};
