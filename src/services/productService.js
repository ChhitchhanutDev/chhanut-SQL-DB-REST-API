export class ProductService {
	async list() {
		const { ProductRepository } = await import('../repositories/productRepository.js');
		return await ProductRepository.getAll();
	}

	async create(name, price, onHand) {
		const { ProductRepository } = await import('../repositories/productRepository.js');
		return await ProductRepository.create(name, price, onHand);
	}

	async update(id, name, price, onHand) {
		const { ProductRepository } = await import('../repositories/productRepository.js');
		const existing = await ProductRepository.findById(id);
		if (!existing || existing.length === 0) {
			return null;
		}
		await ProductRepository.update(id, name, price, onHand);
		return await ProductRepository.findById(id);
	}

	async delete(id) {
		const { ProductRepository } = await import('../repositories/productRepository.js');
		const existing = await ProductRepository.findById(id);
		if (!existing || existing.length === 0) {
			return null;
		}
		await ProductRepository.delete(id);
		return true;
	}

	async findById(id) {
		const { ProductRepository } = await import('../repositories/productRepository.js');
		return await ProductRepository.findById(id);
	}
}