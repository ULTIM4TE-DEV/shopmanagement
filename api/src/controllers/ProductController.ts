import { Advised } from 'aspect.js'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { ProductRepository } from '../repository/ProductRepository'

@Advised()
class ProductController {
	public async getProducts(req: Request, res: Response): Promise<Response> {
		const arrStore = await getCustomRepository(ProductRepository).getProducts()
		return res.status(200).json({
			response: arrStore,
			responseCode: 200,
		})
	}

	public async getProductById(req: Request, res: Response): Promise<Response> {
		const productId = Number(req.params.id)
		const objStore = await getCustomRepository(ProductRepository).getProductById(productId)
		if (objStore) {
			return res.status(200).json({
				response: objStore,
				responseCode: 200,
			})
		} else {
			return res.status(200).json({
				response: objStore,
				responseCode: 400,
			})
		}
	}

	public async getProductsByStoreId(req: Request, res: Response): Promise<Response> {
		const productId = Number(req.params.id)
		const arrStore = await getCustomRepository(ProductRepository).getProductsByStoreId(productId)
		if (arrStore) {
			return res.status(200).json({
				response: arrStore,
				responseCode: 200,
			})
		} else {
			return res.status(200).json({
				response: arrStore,
				responseCode: 400,
			})
		}
	}

	public async createProduct(req: Request, res: Response): Promise<Response> {
		const objProduct = req.body
		await getCustomRepository(ProductRepository).createProduct(objProduct)
		return res.status(201).json({
			responseCode: 201,
		})
	}

	public async editProduct(req: Request, res: Response): Promise<Response> {
		const objProduct = req.body
		const result = await getCustomRepository(ProductRepository).getProductById(objProduct.id)
		if (result) {
			await getCustomRepository(ProductRepository).editProduct(objProduct)
			return res.status(201).json({
				responseCode: 201,
			})
		} else {
			return res.status(400).json({
				responseCode: 400,
			})
		}
	}

	public async deleteProduct(req: Request, res: Response): Promise<Response> {
		const productId = Number(req.params.id)
		await getCustomRepository(ProductRepository).deleteProduct(productId)
		return res.status(201).json({
			responseCode: 201,
		})
	}
}

export const productController = new ProductController()
