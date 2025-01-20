const express = require('express');

const app = express();
app.use(express.json());

//MongoDB connection
connect();
app.listen(3000);