const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

const db = mysql.createConnection({
  host: "database",
  user: "root",
  password: "rootpassword",
  database: "appdb"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err.message);
  } else {
    console.log("Connected to MySQL database successfully");
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running and attempted database connection");
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});