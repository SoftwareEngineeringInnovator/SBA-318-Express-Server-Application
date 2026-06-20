// This file handles all incident-related API routes.

import express from "express";
import incidents from "../data/incidents.js";

const router = express.Router();

// GET /api/incidents, this route shows and filter incidents like severity, status, or authentication
router.get("/", (req, res) => {
  const { severity, status, category } = req.query;

  // list by filters
  let filteredIncidents = incidents;

  // Filter by severity if the user adds ?severity=High to the URL.
  if (severity) {
    filteredIncidents = filteredIncidents.filter(
      (incident) => incident.severity.toLowerCase() === severity.toLowerCase()
    );
  }

  // Filter by status if the user adds ?status=Open to the URL.
  if (status) {
    filteredIncidents = filteredIncidents.filter(
      (incident) => incident.status.toLowerCase() === status.toLowerCase()
    );
  }

  // Filter by category if the user adds ?category=Authentication to the URL.
  if (category) {
    filteredIncidents = filteredIncidents.filter(
      (incident) => incident.category.toLowerCase() === category.toLowerCase()
    );
  }

  res.json(filteredIncidents);
});

// GET /api/incidents/:id, this route shows incidents based on the ID in the URL.
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

export default router;