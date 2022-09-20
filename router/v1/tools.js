// tools api
const express = require("express");
const router = express.Router();
const allTools = require("../../controller/tools");
const limiter = require("../../middleware/limiter");
const viewCount = require("../../middleware/viewCount");
// const apiLimiter = require("../../middleware/limiter");

router.route("/").get(allTools.getAllTools).post(allTools.saveATools);
router
  .route("/:id")
  .get(viewCount, allTools.getIdTools)
  .patch(allTools.updateTools)
  .delete(allTools.deleteProduct);

module.exports = router;
