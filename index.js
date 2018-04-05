const Express = require('express');
const app = new Express();

app.get('/auth0/callback', (req, res) => {
    const state = req.query.state;
    console.log(`complete url is ${req.url}`);
    res.json({
        state: req.query.state,
        query: req.query
    });
});
app.get('/', (req, res) => {
    res.json('i am here!');
})
app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));