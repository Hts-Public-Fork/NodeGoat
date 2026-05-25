// v29 validation — SAST trigger (command injection)
module.exports.runSearch = function (req, res) {
    const userQuery = req.query.q;
    const { exec } = require('child_process');
    exec('grep -r ' + userQuery + ' /var/log/', (err, stdout) => {
        res.send(stdout);
    });
};

// SAST trigger #2 — SQL string concatenation
module.exports.lookupUser = function (req, res, db) {
    const name = req.query.name;
    db.query("SELECT * FROM users WHERE name='" + name + "'", (err, rows) => {
        res.json(rows);
    });
};
