module.exports = (app) => {
    app.get('/about', function (req, res) {
        let workers = [
            {
                name: "Anders Hansen",
                role: "Direktør",
                mail: "chefen@slipseknuden.eu",
                img: "./img/medarbejdere/anders.jpg"
            },
            {
                name: "Jan Frandsen",
                role: "Sælger",
                mail: "jf@slipseknuden.eu",
                img: "./img/medarbejdere/jan.jpg"
            },
            {
                name: "Annelise Johnson",
                role: "Sekretær",
                mail: "info@slipseknuden.eu",
                img: "./img/medarbejdere/annelise.jpg"
            },
        ];
        res.render('pages/about', {
            workers: workers,
        });
    });
};