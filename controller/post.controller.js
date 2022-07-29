import { pool as db } from "../db.js";

export class PostController {
  async createPost(req, res) {
    const { title, content, user_id } = req.body;
    const newPost = await db.query('INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *', [title, content, user_id]);
    res.json(newPost.rows[0]);
  };
  async getPostByUser(req, res) {
    const posts = await db.query('SELECT * FROM post WHERE user_id = $1', [req.query.user_id]);
    res.json(posts.rows);
  };
};

export const postController = new PostController();