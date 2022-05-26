const express = require("express");
const models = require("../models");
const tf = require("@tensorflow/tfjs");
const cxrStore = require("../store/cxr.store");
const routes = express.Router();

routes.post("/upload-sample", async (req, res) => {
  cxrStore(req, res, async (err) => {
    if (err) {
      res.status(500).json({
        message: "Error while uploading test",
        error: err.message,
      });
    } else {
      const { user_id } = req.body;
      const { file } = req;
      const path = file.path;
      const model = tf.loadLayersModel();
      // await models.Samples.create({
      //   user_id: user_id,
      //   image: image,
      // })
      //   .then((sample) => {
      //     res.status(200).json({
      //       message: "Sample Uploaded",
      //       sample: sample,
      //     });
      //   })
      //   .catch((error) => {
      //     res.status(500).json({
      //       message: "Error while uploading sample",
      //       error: error.message,
      //     });
      //   });
    }
  });
});

module.exports = routes;
