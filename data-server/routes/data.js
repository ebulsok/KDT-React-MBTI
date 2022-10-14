const express = require('express');
const router = express.Router();

const db = require('../controllers/dataController');

router.get('/count', (req, res) => {
  db.getCounts((data) => {
    res.send(data);
  });
});

router.post('/inccount', (req, res) => {
  db.incCounts((msg) => {
    res.send(msg);
  });
});

module.exports = router;
