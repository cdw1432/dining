const meal = require("../../../models/meal");

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
    }
  };