const meal = require("../../../models/meal");
const {dlg, carrillo, portola }= require("../../../models/commons");

module.exports = {
    get: async (req, res) => {
      try {
        const m = await meal.findAll({
            attributes: ['date', 'what', 'food', 'station'],
        });
  
        res.status(200).json(m);
      } catch (error) {
        console.error("Error fetching meal:", error);
        res.status(500).json({ message: "Error fetching meal from db" });
      }
    },
    getDLG: async (req,res) => {
      try {
        const data = await dlg.findAll({
          attributes:['date', 'food', 'station'],
        });

        res.status(200).json(data);
      } catch(error) {
        console.error("error fetching data for DLG: ", error);
        res.status(500).json({ message: "Error fetching data for dlg from db" })
      }
    },
    getCarrillo: async (req,res) => {
      try {
        const data = await carrillo.findAll({
          attributes:['date', 'food', 'station'],
        });

        res.status(200).json(data);
      } catch(error) {
        console.error("error fetching data for Carrillo: ", error);
        res.status(500).json({ message: "Error fetching data for Carrillo from db" })
      }
    },
    getPortola: async (req,res) => {
      try {
        const data = await portola.findAll({
          attributes:['date', 'food', 'station'],
        });

        res.status(200).json(data);
      } catch(error) {
        console.error("error fetching data for Portola: ", error);
        res.status(500).json({ message: "Error fetching data for Portola from db" })
      }
    }
  };