import { UserModel } from "../models/userModel.js";

export class UserController {
    // GET all users
    usersList = async (req, res) => {
        try {
            const users = await UserModel.getAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Create user
    createUser = async (req, res) => {
        const name = req.body.name;
        try {
            const user = await UserModel.create(name);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Update user
    updateUser = async (req, res) => {
        const id = parseInt(req.params.id);
        const name = req.body.name;
        try {
            const user = await UserModel.find(id);
            if (user.length === 0) {
                return res.status(404).send({ error: 'User not found' });
            }
            await UserModel.update(name, id)
            res.send({ id, name: name, message: 'User updated successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Delete user
    deleteUser = async (req, res) => {
        const id = parseInt(req.params.id);
        try {
            const user = await UserModel.find(id);
            if (user.length === 0) {
                return res.status(404).send({ error: 'User not found' });
            }
            await UserModel.delete(id)
            res.send({ message: 'Delete user successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}