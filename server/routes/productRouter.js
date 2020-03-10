const express = require('express');
const ProductsController = require('../controllers/ProductsController');
const router = express.Router();

router.get('/product/:id', ProductsController.getProductById);
router.get('/products', ProductsController.getProducts);
router.post('/product', ProductsController.createProduct);
router.put('/product/:id', ProductsController.updateProduct);
router.delete('/product/:id', ProductsController.deleteProduct);

module.exports = router;
