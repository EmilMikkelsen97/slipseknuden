module.exports = (app) => {
    app.get('/guarantee', function (req, res) {
        res.render('pages/guarantee');
    });
};