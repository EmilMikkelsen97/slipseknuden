module.exports = (app) => {
    require('./frontpage')(app);
    require('./contact')(app);
    require('./about')(app);
    require('./guarantee')(app);
    require('./news')(app);
    require('./products')(app);
}; 