import { ProductService } from "../services/productService.js";
import { BaseController } from "./baseController.js";

const productService = new ProductService();

export class ProductController extends BaseController {
	list = async (req, res) => {
		try {
			const products = await productService.list();
			this.success(res, 200, 'List of products', products);
		} catch (error) {
			this.error(res, 500, error.message);
		}
	}

	create = async (req, res) => {
		const name = req.body.name;
		const price = req.body.price;
		const onHand = req.body.stock;
		try {
			const product = await productService.create(name, price, onHand);
			this.success(res, 201, 'Created product', product);
		} catch (error) {
			this.error(res, 500, error.message);
		}
	}

	update = async (req, res) => {
		const id = parseInt(req.params.id);
		const name = req.body.name;
		const price = req.body.price;
		const onHand = req.body.stock;
		try {
			const product = await productService.update(id, name, price, onHand);
			if (!product) {
				return this.error(res, 404, 'Product not found');
			}
			this.success(res, 200, 'Updated product', product);
		} catch (error) {
			this.error(res, 500, error.message);
		}
	}

	delete = async (req, res) => {
		const id = parseInt(req.params.id);
		try {
			const result = await productService.delete(id);
			if (!result) {
				return this.error(res, 404, 'Product not found');
			}
			this.success(res, 200, 'Deleted product');
		} catch (error) {
			this.error(res, 500, error.message);
		}
	}
}