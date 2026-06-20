// SBA 318 - Express Server Application
// Cybersecurity Incident Tracker

import express from "express";
import usersRouter from "./routes/users.js";
import incidentsRouter from "./routes/incidents.js";
import commentsRouter from "./routes/comments.js";

const app = express();
const PORT = 3000;

// This middleware allows Express to read JSON data from API requests.
app.use(express.json());

// Basic home route to test that the server is working.
app.get("/", (req, res) => {
  res.send("Cybersecurity Incident Tracker server is running.");
});

// These lines connect our route files to the main server.
app.use("/api/users", usersRouter);
app.use("/api/incidents", incidentsRouter);
app.use("/api/comments", commentsRouter);

// Simple temporary error handler.
// Later we will move this into better error-handling middleware.
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || "Something went wrong on the server.",
  });
});

// This starts the server and listens for requests on port 3000.
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});