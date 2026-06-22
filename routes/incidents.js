// This file handles all incident-related API routes

import express from "express";
import incidents from "../data/incidents.js";
import validateIncident from "../middleware/validateIncident.js";

const router = express.Router();

// GET /api/incidents, this route shows and filter incidents like severity, status, or authentication
router.get("/", (req, res) => {
  const { severity, status, category } = req.query;

  // list by filters
  let filteredIncidents = incidents;

  // Filter by severity if the user adds ?severity=High to the URL
  if (severity) {
    filteredIncidents = filteredIncidents.filter(
      (incident) => incident.severity.toLowerCase() === severity.toLowerCase()
    );
  }

  // Filter by status if the user adds ?status=Open to the URL
  if (status) {
    filteredIncidents = filteredIncidents.filter(
      (incident) => incident.status.toLowerCase() === status.toLowerCase()
    );
  }

  // Filter by category if the user adds ?category=Authentication to the URL
  if (category) {
    filteredIncidents = filteredIncidents.filter(
      (incident) => incident.category.toLowerCase() === category.toLowerCase()
    );
  }

  res.json(filteredIncidents);
});

// GET /api/incidents/:id, this route shows incidents based on the ID in the URL
router.get("/:id", (req, res, next) => {
  const incidentId = Number(req.params.id);

  const incident = incidents.find((incident) => incident.id === incidentId);

  if (!incident) {
    const error = new Error("Incident not found.");
    error.status = 404;
    return next(error);
  }

  res.json(incident);
});

// GET /api/incidents/:id/download, this route downloads the incidents from the report page
router.get("/:id/download", (req, res, next) => {
  const incidentId = Number(req.params.id);

  const incident = incidents.find((incident) => incident.id === incidentId);

  if (!incident) {
    const error = new Error("Incident not found.");
    error.status = 404;
    return next(error);
  }

  const report = `
CYBERSHIELD INCIDENT REPORT

Incident ID: ${incident.id}
Reported By User ID: ${incident.userId}
Title: ${incident.title}
Category: ${incident.category}
Severity: ${incident.severity}
Status: ${incident.status}

Description:
${incident.description}
`;

  // Download the report as a text file.
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=incident-${incident.id}-report.txt`
  );

  // The file will be downloaded as plain text.
  res.setHeader("Content-Type", "text/plain");

  res.send(report);
});

// POST /api/incidents, this route creates a new incident
router.post("/", validateIncident, (req, res) => {
  const { userId, title, category, severity, status, description } = req.body;

  // Creates a new ID in the incident's array.
  const newId = incidents.length + 1;

  const newIncident = {
    id: newId,
    userId: Number(userId),
    title,
    category,
    severity,
    status,
    description,
  };

  // This adds the new incident to our incidents array
  incidents.push(newIncident);

  // If the request came from the HTML form, send the user back to the dashboard.
res.redirect("/");

  // 201 means something new was successfully created
  // res.status(201).json(newIncident);
});

// PATCH /api/incidents/:id, this route updates an existing incident
router.patch("/:id", (req, res, next) => {
  const incidentId = Number(req.params.id);

  const incident = incidents.find((incident) => incident.id === incidentId);

  if (!incident) {
    const error = new Error("Incident not found.");
    error.status = 404;
    return next(error);
  }

  const { title, category, severity, status, description } = req.body;

  // These statements will update the fields in the request.
  if (title) incident.title = title;
  if (category) incident.category = category;
  if (severity) incident.severity = severity;
  if (status) incident.status = status;
  if (description) incident.description = description;

  res.json(incident);
});

// DELETE /api/incidents/:id, this route removes an incident using the ID from the URL
router.delete("/:id", (req, res, next) => {
  const incidentId = Number(req.params.id);

  const incidentIndex = incidents.findIndex((incident) => incident.id === incidentId);

  if (incidentIndex === -1) {
    const error = new Error("Incident not found.");
    error.status = 404;
    return next(error);
  }

  // splice will remove the incident from the array
  const deletedIncident = incidents.splice(incidentIndex, 1);

  res.json({
    message: "Incident deleted successfully.",
    deletedIncident: deletedIncident[0],
  });
});

export default router;