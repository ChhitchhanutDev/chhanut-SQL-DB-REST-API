import { BaseModel } from './baseModel.js';

export class ProductModel extends BaseModel {
    static table = 'products';

    static get = async () => {
        const sql = `SELECT * FROM  ${this.table}`;
        const rows = await this.query(sql);
        return rows;
    }

    static create = async (name, price, onHand) => {
        const sql = `INSERT INTO ${this.table} (name, price, on_hand) VALUES (?, ?, ?)`;
        const result = await this.execute(sql, [name, price, onHand]);
        return { id: result.insertId, name, price, onHand };
    }

    static find = async (id) => {
        const sql = `SELECT * FROM ${this.table} where id = ?`;
        const rows = await this.query(sql, [id]);
        return rows;
    }

    static update = async (name, price, onHand, id) => {
        const sql = `UPDATE ${this.table} SET name = ?, price = ?, on_hand = ? WHERE id = ?`;
        await this.execute(sql, [name, price, onHand, id]);
    }

    static delete = async (id) => {
        const sql = `DELETE FROM ${this.table} WHERE id = ?`;
        await this.execute(sql, [id]);
    }
}