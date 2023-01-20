const router = require('express').Router();
const noteRoute = require('routes/apiRoutes/noteRoute.js');

router.use(noteRoute);

module.exports = router;
