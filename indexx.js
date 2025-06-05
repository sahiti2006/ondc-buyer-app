const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());

// Mount routes under /ondc
app.use("/ondc", routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Buyer API server running at http://localhost:${PORT}`);
});
