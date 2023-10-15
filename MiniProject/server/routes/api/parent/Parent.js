const express = require("express");
router = express.Router();
const Update = require("../../../model/Update");
const authorize = require("../../../middleware/authorize");
const { ROLE_GROUPS } = require("../../../constants");

router.use(authorize(ROLE_GROUPS.ParentGroup));
router.get("/getCurrentUpdate", async (req, res) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const currUpdates = await Update.find({
    created: {
      $gte: today,
    },
  });

  console.log(currUpdates);
  res.json(currUpdates);
});

router.get("/getAllUpdate", async (req, res) => {
  const updates = await Update.find({});
  console.log(updates);
  res.json(updates);
});

module.exports = router;
