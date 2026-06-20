// This file handles all comment-related API routes.

import express from "express";
import comments from "../data/comments.js";

const router = express.Router();

// GET /api/comments, this route shows all comments.
router.get("/", (req, res) => {
  res.json(comments);
});

// GET /api/comments/:id, this route shows one comment based on the ID in the URL.
router.get("/:id", (req, res, next) => {
  const commentId = Number(req.params.id);

  const comment = comments.find((comment) => comment.id === commentId);

  if (!comment) {
    const error = new Error("Comment not found.");
    error.status = 404;
    return next(error);
  }

  res.json(comment);
});

export default router;