// This file handles all user-related API routes.

import express from "express";
import users from "../data/users.js";

const router = express.Router();

// GET /api/users
// This route shows all users.
router.get("/", (req, res) => {
  res.json(users);
});

// GET /api/users/:id
// This route shows one user based on the ID in the URL.
router.get("/:id", (req, res, next) => {
  const userId = Number(req.params.id);

  const user = users.find((user) => user.id === userId);

  if (!user) {
    const error = new Error("User not found.");
    error.status = 404;
    return next(error);
  }

  res.json(user);
});

export default router;