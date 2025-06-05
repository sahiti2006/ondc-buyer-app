const express = require("express");
const router = express.Router();

// 🔍 /on_search
router.post("/on_search", (req, res) => {
  console.log("✅ /on_search hit");
  console.log(req.body);

  const response = {
    context: req.body.context,
    message: {
      catalog: {
        descriptors: [{ name: "Demo Product" }]
      }
    }
  };

  res.status(200).send(response);
});

// 📦 /on_init
router.post("/on_init", (req, res) => {
  console.log("✅ /on_init hit");
  console.log(req.body);

  res.status(200).send({ message: "Init response placeholder" });
});

// ✅ /on_confirm
router.post("/on_confirm", (req, res) => {
  console.log("✅ /on_confirm hit");
  console.log(req.body);

  res.status(200).send({ message: "Confirm response placeholder" });
});

// 🛒 /on_select
router.post("/on_select", (req, res) => {
  console.log("✅ /on_select hit");
  console.log(req.body);

  res.status(200).send({ message: "Select response placeholder" });
});

// 📦 /on_track
router.post("/on_track", (req, res) => {
  console.log("✅ /on_track hit");
  console.log(req.body);

  res.status(200).send({ message: "Track response placeholder" });
});

module.exports = router;
