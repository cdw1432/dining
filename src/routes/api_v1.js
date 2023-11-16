const express = require('express')
const router = express.Router();

const example = require('../controllers/api/v1/example')

router.get("/example", (req,res) => {example.get(req,res)})

module.exports = router;