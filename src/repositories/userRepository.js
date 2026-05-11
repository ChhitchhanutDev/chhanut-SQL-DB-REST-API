import { BaseRepository } from './baseRepository.js';
import { UserModel } from '../models/userModel.js';

export class UserRepository extends BaseRepository {
	static model = UserModel;
	static table = UserModel.table;

	static async getAll() {
		const sql = `SELECT * FROM ${this.table}`;
		return await this.query(sql);
	}

	static async findById(id) {
		const sql = `SELECT * FROM ${this.table} WHERE id = ?`;
		return await this.query(sql, [id]);
	}

	static async create(name) {
		const sql = `INSERT INTO ${this.table} (user) VALUES (?)`;
		const result = await this.execute(sql, [name]);
		return { id: result.insertId, name };
	}

	static async update(id, name) {
		const sql = `UPDATE ${this.table} SET user = ? WHERE id = ?`;
		await this.execute(sql, [name, id]);
	}

	static async delete(id) {
		const sql = `DELETE FROM ${this.table} WHERE id = ?`;
		await this.execute(sql, [id]);
	}
}