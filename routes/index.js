const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.send('Homepage');
});

module.exports = indexRouter;
