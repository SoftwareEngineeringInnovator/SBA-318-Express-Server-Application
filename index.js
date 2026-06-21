// SBA 318 - Express Server Application
// Cybersecurity Incident Tracker

import express from "express";
import usersRouter from "./routes/users.js";
import incidentsRouter from "./routes/incidents.js";
import commentsRouter from "./routes/comments.js";
import requestLogger from "./middleware/requestLog.js";
import incidents from "./data/incidents.js";

const app = express();
const PORT = 3000;

// Set EJS 
app.set("view engine", "ejs");

// Files from the public folder: CSS
app.use(express.static("public"));

// Logs the request in the terminal.
app.use(requestLogger);

// This middleware allows Express to read JSON data from API requests
app.use(express.urlencoded())
app.use(express.json());

// Basic home route to test that the server is working. renders the page using ejs
app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Cybersecurity Incident Tracker",
    incidents,
  });
});

// These lines connect our route files to the main server.
app.use("/api/users", usersRouter);
app.use("/api/incidents", incidentsRouter);
app.use("/api/comments", commentsRouter);

// Error handler to check for routes that are not valid
app.use((req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  error.status = 404;
  next(error);
});
// Error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || "Something went wrong on the server.",
  });
});

// This starts the server and listens for requests on port 3000.
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});