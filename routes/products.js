module.exports = (app) => {
    app.get('/products', function (req, res) {
        let products = [
            {
                img: "./img/slips/1_klassisk_brun.jpg",
                name: "Shoon Slips",
                description: "Klassisk Brun, Et klassisk slips til den brune habit.",
                price: 900
            },
            { 
                img: "./img/slips/2_stribet_stil.jpg",
                name: "Shoon Slips", 
                description: "Stribet Stil, Sort stribet - et rigtigt direktørslips.",
                price: 650
            },
            { 
                img: "./img/slips/3_brudgommens_favorit.jpg",
                name: "Korea Special", 
                description: "Brudgommens favorit, Skal du giftes? så skal det være det her!",
                price: 350
            },
            {
                img: "./img/slips/4_soelvpil.jpg",
                name: "US Imports", 
                description: "Sølvpil, Er du til fest og farver så vælg dette fantastiske slips.",
                price: 600
            },
            { 
                img: "./img/slips/5_roed_f11.jpg",
                name: "US Imports", 
                description: "Rød F11, Slipset til den store charmør :-)",
                price: 700
            },
            { 
                img: "./img/slips/6_blaa_kant.jpg",
                name: "Sleek Fabrics UK", 
                description: "Blå kant, køb vores blå slips til barnedåben!",
                price: 560
            },
            { 
                img: "./img/slips/7_fars_favorit.jpg",
                name: "Sleek Fabrics UK", 
                description: "Fars favorit, klassisk slips med et twist.",
                price: 900
            },
            { 
                img: "./img/slips/8_sort_nat.jpg",
                name: "Sleek Fabrics UK", 
                description: "Sort nat, slipset til den ultra stilbeviste",
                price: 900
            },
            { 
                img: "./img/slips/9_blue.jpg",
                name: "Shoon Slips", 
                description: "Blue, Blåt med striber.",
                price: 450
            },
            { 
                img: "./img/slips/10_tern.jpg",
                name: "Sleek Fabrics UK", 
                description: "Tern, Perfekt til den klassiske blå skjorte.",
                price: 800
            },
            { 
                img: "./img/slips/11_raeven.jpg",
                name: "US Imports", 
                description: "Ræven, Lækkert ræverødt slips.",
                price: 790
            },
            { 
                img: "./img/slips/12_kinini.jpg",
                name: "Korea Special", 
                description: "Kinini, Et lækkert slips i høj kvalitet.",
                price: 780
            },
            { 
                img: "./img/slips/13_europa.jpg",
                name: "Sleek Fabrics UK", 
                description: "Europa, et lækkert slips i en super kvalitet.",
                price: 500
            },
            { 
                img: "./img/slips/14_kina.jpg",
                name: "Korea Special", 
                description: "Kina,Et super slips fra vores kinesiske designer.",
                price: 800
            },
        ];
        
        res.render('pages/products', {
            products: products,
        });
    });
};