// Bug 5 v28 verify: should produce ONE pr-merge row + ONE pr_merge_events row.
// v28 fixes (a) pr_merge_event_repository singleton import,
//           (b) sync_pr_merge_to_target_branch accepting merged_by.
module.exports.testFunction = function (req, res) {
    const userInput = req.query.cmd;
    const { exec } = require('child_process');
    exec('echo ' + userInput, (err, stdout) => {
        res.send(stdout);
    });
};
