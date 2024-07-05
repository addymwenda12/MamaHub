import express from 'express'
import { addComment, getComments } from '../controllers/comments'
import { verifyToken } from '../middleware/auth'

const router = express.Router();

router.post("/", verifyToken, addComment);
router.get('/:postId', getComments);

export default router;