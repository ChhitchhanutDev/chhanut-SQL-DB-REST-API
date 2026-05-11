import { UserService } from "../services/userService.js";
import { BaseController } from "./baseController.js";

const userService = new UserService();

export class UserController extends BaseController {
	list = async (req, res) => {
		try {
			const users = await userService.list();
			this.success(res, 200, 'List of users', users);
		} catch (error) {
			this.error(res, 500, error.message);
		}
	}

	create = async (req, res) => {
		const name = req.body.name;
		try {
			const user = await userService.create(name);
			this.success(res, 201, 'Created user', user);
		} catch (error) {
			this.error(res, 500, error.message);
		}
	}

	update = async (req, res) => {
		const id = parseInt(req.params.id);
		const name = req.body.name;
		try {
			const user = await userService.update(id, name);
			if (!user) {
				return this.error(res, 404, 'User not found');
			}
			this.success(res, 200, 'Updated user', user);
		} catch (error) {
			this.error(res, 500, error.message);
		}
	}

	delete = async (req, res) => {
		const id = parseInt(req.params.id);
		try {
			const result = await userService.delete(id);
			if (!result) {
				return this.error(res, 404, 'User not found');
			}
			this.success(res, 200, 'Deleted user');
		} catch (error) {
			this.error(res, 500, error.message);
		}
	}
}