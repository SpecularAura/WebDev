const express = require("express");
const router = express.Router();

router.use("/teacher", require("./teacher/teacher"));
router.use("/parent", require("./parent/Parent"));

module.exports = router;
