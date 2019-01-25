const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');
const ctrl = require('./controller');

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then((db)=> {app.set('db',db)})
.catch((err) => {console.log(err)});

app.get('/api/inventory',ctrl.getInventory)
app.post('/api/product',ctrl.postProduct)
app.delete(`/api/product/:id`,ctrl.deleteProduct)
app.put('/api/product/:id',ctrl.editProduct)

const PORT = 4000;
app.listen(PORT,() => {
    console.log(`Vi hör dig på ${PORT}`)
});