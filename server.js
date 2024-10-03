const express = require('express');
const cors = require('cors');
const port = 3000;
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => {
    console.log('Servidor rodando!');
});
