const express = require("express");
const bcrypt = require("bcrypt");
const models = require("../models");

const router = express.Router();

router.post("/signup/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await models.User.findOne({
      where: {
        email: email,
      },
    });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
        status: false,
      });
    }
    const newUser = await models.User.create({
      name: name,
      email: email,
      password: bcrypt.hashSync(password, 10),
    });
    if (newUser) {
      res.status(200).json({
        status: true,
        message: "Account created successfully",
        user: newUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error occured while  creating an account",
      error: error.message,
    });
  }
});

// login
router.post("/login/", async (req, res) => {
  try {
    const { email, password } = req.body;
    await models.User.findOne({
      where: {
        email: email,
      },
    }).then((user) => {
      if (user) {
        const valid = bcrypt.compareSync(password, user.password);
        if (valid) {
          res.status(200).json({
            message: "Logged In Successfully",
            user: user,
            status: true,
          });
        } else {
          res.status(401).json({
            message: "Password is not valid",
            user: {},
            status: false,
          });
        }
      } else {
        res.status(404).json({
          message: "Account not found",
          user: {},
          status: false,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while logging in",
      error: error.message,
    });
  }
});

// get all users
router.get("/", async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.status(200).json({
      message: "Users fetched successfully",
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while fetching users",
      error: error.message,
    });
  }
});

// get user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await models.User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      res.status(200).json({
        message: "User fetched successfully",
        user: user,
      });
    } else {
      res.status(404).json({
        message: "User not found",
        user: {},
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error occured while fetching user",
      error: error.message,
    });
  }
});

//covid_vitals

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

router.post("/cxr/", async (req, res) => {
  try {
    const { inputSamples, result, outputSample, accuracy, user_id } = req.body;
  } catch (error) {}
});
module.exports = router;
