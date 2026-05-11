import { getConnection } from '../config/db.js';

export class BaseRepository {
	static table = '';
	static model = null;

	static async query(sql, params = []) {
		const pool = getConnection();
		const [rows] = await pool.query(sql, params);
		return rows;
	}

	static async execute(sql, params = []) {
		const pool = getConnection();
		const [result] = await pool.execute(sql, params);
		return result;
	}
}