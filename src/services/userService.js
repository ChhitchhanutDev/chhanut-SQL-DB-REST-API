export class UserService {
	async list() {
		const { UserRepository } = await import('../repositories/userRepository.js');
		return await UserRepository.getAll();
	}

	async create(name) {
		const { UserRepository } = await import('../repositories/userRepository.js');
		return await UserRepository.create(name);
	}

	async update(id, name) {
		const { UserRepository } = await import('../repositories/userRepository.js');
		const existing = await UserRepository.findById(id);
		if (!existing || existing.length === 0) {
			return null;
		}
		await UserRepository.update(id, name);
		return await UserRepository.findById(id);
	}

	async delete(id) {
		const { UserRepository } = await import('../repositories/userRepository.js');
		const existing = await UserRepository.findById(id);
		if (!existing || existing.length === 0) {
			return null;
		}
		await UserRepository.delete(id);
		return true;
	}

	async findById(id) {
		const { UserRepository } = await import('../repositories/userRepository.js');
		return await UserRepository.findById(id);
	}
}