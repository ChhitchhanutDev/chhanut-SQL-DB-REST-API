import { BaseRepository } from './baseRepository.js';
import { ProductModel } from '../models/productModel.js';

export class ProductRepository extends BaseRepository {
	static model = ProductModel;
	static table = ProductModel.table;

	static async getAll() {
		const sql = `SELECT * FROM ${this.table}`;
		return await this.query(sql);
	}

	static async findById(id) {
		const sql = `SELECT * FROM ${this.table} WHERE id = ?`;
		return await this.query(sql, [id]);
	}

	static async create(name, price, onHand) {
		const sql = `INSERT INTO ${this.table} (name, price, on_hand) VALUES (?, ?, ?)`;
		const result = await this.execute(sql, [name, price, onHand]);
		return { id: result.insertId, name, price, onHand };
	}

	static async update(id, name, price, onHand) {
		const sql = `UPDATE ${this.table} SET name = ?, price = ?, on_hand = ? WHERE id = ?`;
		await this.execute(sql, [name, price, onHand, id]);
	}

	static async delete(id) {
		const sql = `DELETE FROM ${this.table} WHERE id = ?`;
		await this.execute(sql, [id]);
	}
}