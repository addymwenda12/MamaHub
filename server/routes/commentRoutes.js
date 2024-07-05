import express from 'express'
import { addComment, getComments } from '../controllers/comments.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router();

router.post("/", verifyToken, addComment);
router.get('/:postId', getComments);

export default router;