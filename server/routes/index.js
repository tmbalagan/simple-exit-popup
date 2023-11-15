var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({
    "title": "Special Offer",
    "decription": "Buy 1 Get 3 Free",
    "offer": "50%"
  })
});

module.exports = router;
