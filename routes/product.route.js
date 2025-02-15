const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const { getallProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller');

//CONSULTES A LA API FETES DES DE INSOMNIA

//ruta per obtenir tots els productes
router.get('/', getallProducts);

//ruta per obtenir un producte per id
router.get('/:id', getProduct);

//ruta per crear un producte
router.post('/', createProduct);

// ruta per actualitzar un producte per id
router.put('/:id', updateProduct);

//ruta per borrar un producte per id
router.delete('/:id', deleteProduct);

module.exports = router;


