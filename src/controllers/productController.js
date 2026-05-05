import { ProductModel } from "../models/productModel.js";
import { BaseController } from "./baseController.js";

export class ProductController extends BaseController{
    List = async (req, res) => {
        try {
            const products = await ProductModel.get();
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
            const product = await ProductModel.create(name, price, onHand);
            this.success(res, 200, 'Created product', product);
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
            const product = await ProductModel.find(id);
            if (product.length === 0) {
                this.error(res, 404, 'Product not found');
            }
            await ProductModel.update(name, price, onHand, id)
            this.success(res, 201, 'Updated product', product);
        } catch (error) {
            this.error(res, 500, error.message);
        }
    }

    delete = async (req, res) => {
        const id = parseInt(req.params.id);
        try {
            const product = await ProductModel.find(id);
            if (product.length === 0) {
                this.error(res, 404, 'Product not found');
            }
            await ProductModel.delete(id)
            this.success(res, 200, 'Deleted product');
        } catch (error) {
            this.error(res, 500, error.message);
        }
    }
}