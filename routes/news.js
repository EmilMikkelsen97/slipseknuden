module.exports = (app) => {
    app.get('/news', function (req, res) {
        let news = [
            {
                date: "02/01/2014",
                header: "Slipsknuden online.",
                description: "Vi lancerer nu vores hjemmesiden med billeder af vores aller fineste slips.",
                read: "LÆS MERE..."
            },
            {
                date: "15/04/2013",
                header: "Slips!",
                description: "Nye slips i vores sortiment.",
                read: "LÆS MERE..."
            },
            {
                date: "7/03/2011",
                header: "Se her!",
                description: "Nye modeslips er på vej til hjemmesiden.",
                read: "LÆS MERE..."
            },
            {
                date: "30/08/2010",
                header: "Nu er du her!",
                description: "Se vores nyeste slips under produkter!",
                read: "LÆS MERE..."
            },
        ];
        res.render('pages/news', {
            news: news,
        });
    });
};