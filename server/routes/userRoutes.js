import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);
router.get('/profile', verifyToken, getUserProfile);

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

/* PUT */
router.put('/profile', verifyToken, updateUserProfile);

export default router;