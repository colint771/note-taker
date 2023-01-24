const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const apiRoutes = require('./routes/apiRoutes/noteRoute');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
require("routes/apiRoutes/index.js")(app);
require("routes/apiRoutes/noteRoute.js")(app);
require("routes/htmlRoutes/index.js")(app);
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});