const express = require('express')
const router = express.Router();

const example = require('../controllers/api/v1/example')
const mealController = require('../controllers/api/v1/mealController')

router.get("/example", (req,res) => {example.get(req,res)})
router.get("/meal", (req,res) => {mealController.get(req,res)})
router.get("/meal/dlg", (req,res) => {mealController.getDLG(req,res)})
router.get("/meal/carrillo", (req,res) => {mealController.getCarrillo(req,res)})
router.get("/meal/portola", (req,res) => {mealController.getPortola(req,res)})
router.post("/api/data", (req, res) => {mealController.post(req, res)});
router.get("/api/date", (req, res) => {mealController.getDate(req, res)});
module.exports = router;