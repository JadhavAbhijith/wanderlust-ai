const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Enable CORS
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello from Node.js Express backend!",
    status: "success"
  });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
