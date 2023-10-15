const express = require("express");
router = express.Router();
const User = require("../../../model/User");
const Update = require("../../../model/Update");
const authorize = require("../../../middleware/authorize");
const { ROLE_GROUPS } = require("../../../constants");

router.post(
  "/createUpdate",
  authorize(ROLE_GROUPS.TeacherGroup),
  async (req, res) => {
    const { heading, lessons } = req.body;
    console.log(heading);
    console.log(lessons);
    const user_id = req.session.user.username;
    console.log(user_id);
    const foundUser = await User.findOne({
      username: user_id,
    });
    console.log(foundUser);
    try {
      const result = await Update.create({
        heading: heading,
        lessons: lessons,
        from: foundUser._id,
      });
      res.status(201).json({ success: `Update successfully created!` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

module.exports = router;
