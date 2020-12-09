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
		const storeId = Number(req.params.id)
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

	public async createStore(req: Request, res: Response): Promise<Response> {
		const objStore = req.body
		await getCustomRepository(StoreRepository).createStore(objStore)
		return res.status(201).json({
			responseCode: 201,
		})
	}

	public async editStore(req: Request, res: Response): Promise<Response> {
		const objStore = req.body
		const result = await getCustomRepository(StoreRepository).getStoreById(objStore.id)
		if (result) {
			await getCustomRepository(StoreRepository).editStore(objStore)
			return res.status(201).json({
				responseCode: 201,
			})
		} else {
			return res.status(400).json({
				responseCode: 400,
			})
		}
	}
}

export const storeController = new StoreController()
