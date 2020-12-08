import { Advised } from 'aspect.js'

@Advised()
class ProductCategoryController {}

export const productCategoryController = new ProductCategoryController()
