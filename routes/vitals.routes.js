const express = require("express");
const models = require("../models");
const router = express.Router();

router.get("/get_vitals/:user_id", async (req, res) => {
  try {
    const user_id = req.params.user_id;
    await models.CovidVitals.findAll({
      where: {
        user_id: user_id,
      },
    }).then((a) => {
      if (a.length > 0) {
        return res.status(200).json({
          message: "Vitals identified",
          vitals: a,
        });
      } else {
        return res.status(404).json({
          message: "NOT FOUND",
          vitals: [],
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "ERROR!!!!!!!",
      error: error.message,
    });
  }
});

module.exports = router;
