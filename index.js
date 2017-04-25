const {hostname} = require('os')
const app = require('express')();

const PORT = process.env.PORT || 8080;

app.get('/*', (req, res) => res.send(`Hello world from '${hostname()}'!`));

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
