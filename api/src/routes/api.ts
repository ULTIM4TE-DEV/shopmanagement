import { Router } from 'express'
import { storeController } from '../controllers/storeController'

const route = Router()

route.get('/', (req, res) => {
	res.render('welcome', {
		message: 'Welcome API',
	})
})
// DB Connection

route.get('/store/getStores', storeController.getStores)
