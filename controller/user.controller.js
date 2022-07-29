import { pool as db } from "../db.js";

export class UserController {
  async createUser(req, res) {
    const { firstname, surname } = req.body;
    const newPerson = await db.query('INSERT INTO person (firstname, surname) values ($1, $2) RETURNING *', [firstname, surname]);    
    res.json(newPerson.rows[0]);
  };  
  async getUsers(req, res) {
    const users = await db.query('SELECT * FROM person');
    res.json(users.rows);
  };  
  async getOneUser(req, res) {
    const user = await db.query('SELECT * FROM person WHERE id = $1', [req.params.id]);
    res.json(user.rows[0]);
  };  
  async updateUser(req, res) {
    const { firstname, surname, id } = req.body;
    const updatingPerson = await db.query('UPDATE person SET firstname = $1, surname = $2 WHERE id = $3 RETURNING *', [firstname, surname, id]);    
    res.json(updatingPerson.rows[0]);
  };  
  async deleteUser(req, res) {
    const user = await db.query('DELETE FROM person WHERE id = $1', [req.params.id]);
    res.json(user.rows[0]);
  };  
};

export const userController = new UserController();