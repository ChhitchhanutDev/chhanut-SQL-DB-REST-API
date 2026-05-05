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

	static get() {
		throw new Error('Abstract method get() must be implemented by subclass');
	}

	static create() {
		throw new Error('Abstract method create() must be implemented by subclass');
	}

	static update() {
		throw new Error('Abstract method update() must be implemented by subclass');
	}

	static delete() {
		throw new Error('Abstract method delete() must be implemented by subclass');
	}

	static find() {
		throw new Error('Abstract method find() must be implemented by subclass');
	}
}

