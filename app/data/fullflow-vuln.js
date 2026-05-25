// Fullflow test: create vulns, open PR, watch counts, merge PR, watch counts.
module.exports.runUntrustedCode = function (req, res) {
    const userExpr = req.query.expr;
    // SAST-trigger #1: code injection via eval
    const result = eval(userExpr);

    // SAST-trigger #2: command injection via exec
    const { exec } = require('child_process');
    exec('echo ' + req.query.msg, (err, stdout) => {
        res.send(stdout);
    });

    return result;
};
