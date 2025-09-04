const express = require("express");
const cors = require("cors");
const app = express();
const port = 3069;

// Allow all CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Success endpoint
app.post("/subscription/cancel-success", (req, res) => {
  res.status(200).json({
    message:
      "Subscription cancelled successfully. You can continue using Pro features until December 15, 2024.",
    subscription: {
      id: "sub_123456789",
      accessUntil: "2024-12-15T23:59:59.000Z",
    },
  });
});

// Error endpoint
app.post("/subscription/cancel-error", (req, res) => {
  res.status(404).json({
    error: "Subscription not found",
    details: "The subscription ID provided does not exist",
    currentTier: "PRO",
    accessEndsAt: "2024-12-15T23:59:59.000Z",
    message: "Unable to cancel subscription",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
