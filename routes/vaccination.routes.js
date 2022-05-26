const express = require("express");
const models = require("../models");
const router = express.Router();
const data = require("../data/vaccinationCenter");

router.get("/centers/", async (req, res) => {
  try {
    const centers = await models.VaccinationCenter.findAll();
    if (centers.length > 0) {
      const data = centers.map((center) => {
        return {
          name: center.name,
          lat: center.location.coordinates[0],
          lng: center.location.coordinates[1],
        };
      });
      return res.status(200).json({
        message: " Vaccination Centers Fetched",
        centers: data,
      });
    } else {
      return res.status(404).json({
        message: "NOT FOUND!!!",
        centers: [],
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "ERROR!!!",
      error: error.message,
    });
  }
});

// router.get("/create/", async (req, res) => {
//   try {
//     data.forEach(async (element) => {
//       const point = {
//         type: "point",
//         coordinates: [element.latitude, element.longitude],
//       };
//       await models.VaccinationCenter.create({
//         name: element.name,
//         location: point,
//       });
//     });
//     return res.status(200).json({
//       message: "Data .....",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Error!!!!",
//       error: error.message,
//     });
//   }
// });

module.exports = router;
