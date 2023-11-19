const express = require('express')
const router = express.Router();

const example = require('../controllers/api/v1/example')
const mealController = require('../controllers/api/v1/mealController')

router.get("/example", (req,res) => {example.get(req,res)})
router.get("/meal", (req,res) => {mealController.get(req,res)})
router.get("/meal/dlg", (req,res) => {mealController.getDLG(req,res)})
router.get("/meal/carrillo", (req,res) => {mealController.getCarrillo(req,res)})
router.get("/meal/portola", (req,res) => {mealController.getPortola(req,res)})

module.exports = router;