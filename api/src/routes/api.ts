import { Router } from 'express'
import { productCategoryController } from '../controllers/productCategoryController'
import { productController } from '../controllers/productController'
import { storeController } from '../controllers/storeController'

const route = Router()

route.get('/', (req, res) => {
	res.render('welcome', {
		message: 'Welcome API',
	})
})
// DB Connection

route.get('/stores', storeController.getStores)
route.get('/store/:id', storeController.getStoreById)

route.post('/store/create', storeController.createStore)
route.put('/store/update', storeController.editStore)

//route.put('/stores/:id', storeController.updateStore)
//route.delete('/stores', storeController.deleteStore)

route.get('/products', productController.getProducts)
route.get('/product/:id', productController.getProductById)
route.get('/products/:id', productController.getProductsByStoreId)

route.post('/product/create', productController.createProduct)
route.put('/product/update', productController.editProduct)
route.delete('/product/delete/:id', productController.deleteProduct)

route.get('/productCategories', productCategoryController.getProductCategories)
route.get('/productCategory/:id', productCategoryController.getProductCategoryById)

export default route
