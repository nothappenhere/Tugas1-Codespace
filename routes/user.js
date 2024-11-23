import express from "express";
const router = express.Router();
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

// get all users
router.get("/", getUsers);

// get single user
router.get("/:id", getUser);

// create new user
router.post("/", createUser);

// Update user
router.put("/:id", updateUser);

// Delete user
router.delete("/:id", deleteUser);

export default router;
