import { UserModel } from "../models/userModel.js";
import { BaseController } from "./baseController.js";

export class UserController extends BaseController{
    // GET all users
    list = async (req, res) => {
        try {
            const users = await UserModel.get();
            this.success(res, 200, 'List of users', users);
        } catch (error) {
            this.error(res, 500, error.message);
        }
    }

    // Create user
    create = async (req, res) => {
        const name = req.body.name;
        try {
            const user = await UserModel.create(name);
            this.success(res, 200, 'Created user', user);
        } catch (error) {
            this.error(res, 500, error.message);
        }
    }

    // Update user
    update = async (req, res) => {
        const id = parseInt(req.params.id);
        const name = req.body.name;
        try {
            const user = await UserModel.find(id);
            if (user.length === 0) {
                this.error(res, 404, 'User not found');
            }
            await UserModel.update(name, id)
            this.success(res, 201, 'Updated user', user);
        } catch (error) {
            this.error(res, 500, error.message);
        }
    }

    // Delete user
    delete = async (req, res) => {
        const id = parseInt(req.params.id);
        try {
            const user = await UserModel.find(id);
            if (user.length === 0) {
                this.error(res, 404, 'User not found');
            }
            await UserModel.delete(id)
            this.success(res, 200, 'Deleted user');
        } catch (error) {
            this.error(res, 500, error.message);
        }
    }
}