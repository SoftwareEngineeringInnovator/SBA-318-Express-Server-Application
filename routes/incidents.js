// This file handles all incident-related API routes.

import express from "express";
import incidents from "../data/incidents.js";

const router = express.Router();

// GET /api/incidents, this route shows all incidents.
router.get("/", (req, res) => {
  res.json(incidents);
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