const express = require("express");
const authorize = require("../middleware/authorize");
const { ROLES_LIST, ROLE_GROUPS } = require("../constants");
const auhtenticate = require("../middleware/authenticate");
const router = express.Router();
router.get("/", auhtenticate, (req, res) => {
  res.json({
    msg: "You are authenticated",
  });
});

router.get("/teacher", authorize(ROLE_GROUPS.TeacherGroup), (req, res) => {
  res.json({
    msg: "The teacher is authorized",
  });
});

router.get("/parent", authorize(ROLE_GROUPS.ParentGroup), (req, res) => {
  res.json({
    msg: `The parent is authorized`,
  });
});

// router.get(
//   "/role3",
//   authorize([ROLES_LIST.Role1, ROLES_LIST.Role2, ROLES_LIST.Role3]),
//   (req, res) => {
//     res.json({
//       msg: "You are authorized",
//     });
//   }
// );
module.exports = router;
