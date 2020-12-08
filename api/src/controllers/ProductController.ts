import { Advised } from 'aspect.js'

@Advised()
class ProductController {}

export const productController = new ProductController()
