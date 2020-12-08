import { Router } from 'express'
import { storeController } from '../controllers/storeController'

const route = Router()

route.get('/', (req, res) => {
	res.render('welcome', {
		message: 'Welcome API',
	})
})
// DB Connection

route.get('/stores', storeController.getStores)
route.get('/stores/:id', storeController.getStoreById)
//route.post('/stores', storeController.createStore)
//route.put('/stores/:id', storeController.updateStore)
//route.delete('/stores', storeController.deleteStore)

export default route
