import { BaseModel } from './baseModel.js';

export class UserModel extends BaseModel {
    static table = 'users';

    static get = async () => {
        const sql = `SELECT * FROM  ${this.table}`;
        const rows = await this.query(sql);
        return rows;
    }

    static create = async (name) => {
        const sql = `INSERT INTO ${this.table} (user) VALUES (?)`;
        const result = await this.execute(sql, [name]);
        return { id: result.insertId, name };
    }

    static find = async (id) => {
        const sql = `SELECT * FROM ${this.table} where id = ?`;
        const rows = await this.query(sql, [id]);
        return rows;
    }

    static update = async (name, id) => {
        const sql = `UPDATE ${this.table} SET user = ? WHERE id = ?`;
        await this.execute(sql, [name, id]);
    }

    static delete = async (id) => {
        const sql = `DELETE FROM ${this.table} WHERE id = ?`;
        await this.execute(sql, [id]);
    }
}