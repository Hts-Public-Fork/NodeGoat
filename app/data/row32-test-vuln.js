// Deliberately vulnerable file added to reproduce Row 32 (SmartScan storage).
// Both Snyk Code and Semgrep should flag eval() on tainted input as
// "JavaScript code injection". If this file is committed in a PR and the
// resulting SAST findings DON'T land in vulnerabilities table, Row 32 is real.

module.exports.runUntrustedCode = function (req, res) {
    const userExpr = req.query.expr;
    // SAST-trigger #1: direct eval on user input
    const result = eval(userExpr);

    // SAST-trigger #2: spawning a shell with user input
    const { exec } = require('child_process');
    exec('echo ' + req.query.msg, (err, stdout) => {
        res.send(stdout);
    });

    return result;
};
