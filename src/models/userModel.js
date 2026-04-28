import { connection } from '../config/db.js';

export class UserModel {
    static getAll = async () => {
        const [rows] = await connection.query('SELECT * FROM users');
        return rows;
    }
    static create = async (name) => {
        const sql = 'INSERT INTO users (user) VALUES (?)';
        const [row] = await connection.execute(sql, [name]);
        return { id: row.insertId, name };
    }
    static find = async (id) => {
        const sql = 'SELECT * FROM users where id = ?';
        const [row] = await connection.execute(sql, [id]);
        return row ;
    }
    static update = async (name, id) => {
        const sql = 'UPDATE users SET user = ? WHERE id = ?';
        await connection.execute(sql, [name, id]);
    }
    static delete = async (id) => {
        const sql = 'DELETE FROM users WHERE id = ?';
        await connection.execute(sql, [id]);
    }
}