const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const courseRoutes = require("./routes/courseRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/courseDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/courses", courseRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
