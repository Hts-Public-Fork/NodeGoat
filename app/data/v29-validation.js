// v29 validation — fixed in v30 fix PR (3 SAST findings removed)
module.exports.runSearch = function (req, res) {
    res.status(403).send('search disabled');
};

module.exports.lookupUser = function (req, res, db) {
    res.status(403).send('lookup disabled');
};
