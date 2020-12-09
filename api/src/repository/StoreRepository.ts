import { EntityRepository, getCustomRepository, Repository } from 'typeorm'
import { Store } from '../models/Store'
@EntityRepository(Store)
export class StoreRepository extends Repository<Store> {
	public async getStores(): Promise<Store[] | undefined> {
		const arrStore = await getCustomRepository(StoreRepository)
			.createQueryBuilder('store')
			.getMany()
		return arrStore
	}

	public async getStoreById(storeId: number): Promise<Store | undefined> {
		const objStore = await getCustomRepository(StoreRepository)
			.createQueryBuilder('store')
			.where('store.storeId = :storeId', { storeId: storeId })
			.getOne()
		return objStore
	}

	public async createStore(product: Store): Promise<Store | undefined> {
		return await getCustomRepository(StoreRepository).save(product)
	}

	public async editStore(product: Store): Promise<Store | undefined> {
		return await getCustomRepository(StoreRepository).save(product)
	}
}
