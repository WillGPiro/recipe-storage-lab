const express = require('express');
const app = express();

app.use(express.json());
//app.use will apply the path below(api/v1/recipes to each of the routes in recipes)
app.use('/api/v1/recipes', require('./routes/recipes'));
app.use('/api/v1/events', require('./routes/events'));
module.exports = app;
