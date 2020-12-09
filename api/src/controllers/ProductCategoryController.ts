import { Advised } from 'aspect.js'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { ProductCategoryRepository } from '../repository/ProductCategoryRepository'

@Advised()
class ProductCategoryController {
	public async getProductCategories(req: Request, res: Response): Promise<Response> {
		const arrProductCategory = await getCustomRepository(
			ProductCategoryRepository
		).getProductCategories()
		return res.status(200).json({
			response: arrProductCategory,
			responseCode: 200,
		})
	}

	public async getProductCategoryById(req: Request, res: Response): Promise<Response> {
		const productCategoryId = Number(req.params.id)
		const objProductCategory = await getCustomRepository(
			ProductCategoryRepository
		).getProductCategoryById(productCategoryId)
		if (objProductCategory) {
			return res.status(200).json({
				response: objProductCategory,
				responseCode: 200,
			})
		} else {
			return res.status(200).json({
				response: objProductCategory,
				responseCode: 400,
			})
		}
	}
}

export const productCategoryController = new ProductCategoryController()
