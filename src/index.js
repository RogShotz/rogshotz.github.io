console.log('Starting server...');

const app = require('express')();

app.get('/', (req, res) =>
    res.json({message: 'docker is easys'})
);

const port = process.env.PORT || 8080;

console.log(port);

app.listen(port, () => console.log(`app listening on http://localhost:${port}`)) // 5000 when in docker