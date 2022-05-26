const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();
const PORT = process.env.PORT || 5000;
const corsOptions = { credentials: true, origin: process.env.url || "*" };
const app = express();

//express middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/", express.static("public"));
app.use("/user/", require("./routes/user.routes"));
app.use("/vitals/", require("./routes/vitals.routes"));
app.use("/hrct/", require("./routes/hrct.routes"));
app.use("/cxr/", require("./routes/cxr.routes"));
app.use("/testing/", require("./routes/testing.routes"));
app.use("/vaccination/", require("./routes/vaccination.routes"));

app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));
