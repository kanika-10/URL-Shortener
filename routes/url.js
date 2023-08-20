const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleRedirectUsingShortId,
} = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleRedirectUsingShortId);
router.get("/analytics/:shortId", handleGetAnalytics);
module.exports = router;
