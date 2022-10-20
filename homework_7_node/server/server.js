const express = require('express');
// const fs = require('fs');
const app = express();
// const cart = require('./cartRouter');

// app.use(express.json());
app.use('/', express.static('public'));
// app.use('api/cart', cart);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}...`));