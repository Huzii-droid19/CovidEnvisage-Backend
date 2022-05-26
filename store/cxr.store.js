const path = require("path");
const multer = require("multer");

const sampleStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/cxr");
  },
  filename: function (req, file, cb) {
    const filename =
      file.originalname.split(".")[0] +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, filename);
  },
  fileFilter: function (req, file, cb) {
    const fileTypes = /jpeg|jpg|png/;
    const extTest = fileTypes.test(
      path.extname(file.originalname).toLocaleLowerCase()
    );
    const mimetypeTest = fileTypes.test(file.mimetype);
    if (mimetypeTest && extTest) {
      cb(null, true);
    } else {
      cb("Error: File type not supported");
    }
  },
});
const CxrUpload = multer({ storage: sampleStorage }).single("file");

module.exports = CxrUpload;
