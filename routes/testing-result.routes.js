const express = require("express");
const models = require("../models");
const router = express.Router();
const AWS = require("aws-sdk");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const s3 = new AWS.S3({
  accessKeyId: process.env.AMAZON_ACCESS_KEY,
  secretAccessKey: process.env.AMAZON_ACCESS_SECRET,
});

router.post("/", async (req, res) => {
  try {
    const base64Data = new Buffer(
      req.body.sample.replace(/^data:image\/png;base64,/, ""),
      "base64"
    );
    const fileName = uuidv4() + ".png";
    const params = {
      Bucket: process.env.AMAZON_BUCKET_NAME,
      Key: `${req.body.type}/${fileName}`,
      Body: base64Data,
      ACL: "public-read",
      ContentEncoding: "base64",
      ContentType: "image/png",
    };
    const { Location } = await s3.upload(params).promise();
    const record = await models.TestingResult.create({
      type: req.body.type,
      sample: Location,
      details: req.body.details,
      result: req.body.result,
      user_id: req.body.user_id,
    });
    if (record) {
      res.json({
        message: "Testing result created successfully",
        data: record,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const records = await models.TestingResult.findAll({
      where: {
        user_id: req.params.id,
      },
      attributes: ["id", "type", "result", "sample"],
    });

    if (records) {
      res.json({
        message: "Testing results found successfully",
        data: records,
      });
    } else {
      res.status(404).json({
        message: "No testing results found",
        data: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
