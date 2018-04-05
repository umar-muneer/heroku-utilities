const Express = require('express');
const app = new Express();

app.get('/auth0/callback', (req, res) => {
    const state = req.query.state;
    res.json(`state:${state}`);
});
app.get('/', (req, res) => {
    res.json('i am here!');
})
app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));