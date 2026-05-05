import { connection } from '../config/db.js';

export class BaseModel {
	static table = '';

	static async query(sql, params = []) {
		const [rows] = await connection.query(sql, params);
		return rows;
	}

	static async execute(sql, params = []) {
		const [result] = await connection.execute(sql, params);
		return result;
	}
}

