import { Advised } from 'aspect.js'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { StoreRepository } from '../repository/StoreRepository'
@Advised()
class StoreController {
	public async getStores(req: Request, res: Response): Promise<Response> {
		const arrStore = await getCustomRepository(StoreRepository).getStores()
		return res.status(200).json({
			response: arrStore,
			responseCode: 200,
		})
	}

	public async getStoreById(req: Request, res: Response): Promise<Response> {
		const storeId = Number(req.query.storeId)
		const objStore = await getCustomRepository(StoreRepository).getStoreById(storeId)
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
}

export const storeController = new StoreController()
