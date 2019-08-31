const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/apex/profile/:platform/:profile", async (req, res) => {
  const { platform, profile } = req.params;
  const options = {
    headers: {
      ["TRN-Api-Key"]: process.env.API_KEY
    }
  };

  try {
    const response = await axios.get(
      `${process.env.APEX_PROFILE_URL}/${platform}/${profile}`,
      options
    );
    res.json(response.data);
  } catch (err) {
    res.status(404).json({ message: "Not Found" });
  }
});

module.exports = router;
