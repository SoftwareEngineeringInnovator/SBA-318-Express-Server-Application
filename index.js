// SBA 318 - Express Server Application
// Cybersecurity Incident Tracker

import express from "express";

const app = express();
const PORT = 3000;

// This middleware allows Express to read form data from HTML forms.
app.use(express.urlencoded({ extended: true }));

// This middleware allows Express to read JSON data from API requests.
app.use(express.json());

// Basic home route to test that the server is working.
app.get("/", (req, res) => {
  res.send("Cybersecurity Incident Tracker server is running.");
});

// This starts the server and listens for requests on port 3000.
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});