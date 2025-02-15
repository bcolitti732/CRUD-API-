 const Product = require('../models/product.model');

 const getallProducts = async (req, res) => {
     try {
         const products = await Product.find();
         res.status(200).json(products);
     } catch (error) {
         res.status(500).json({ message: error.message });
     }
 }

 const getProduct = async (req, res) => {
     try {
         const product = await Product.findById(req.params.id);
         if (!product) {
             return res.status(404).json({ message: 'Product not found' });
         }
         res.status(200).json(product);
     } catch (error) {
         res.status(500).json({ message: error.message });
     }
 }

 const createProduct = async (req, res) => {
     try {
         const product = await Product.create(req.body);
         res.status(200).json(product);
     } catch (error) {
         res.status(500).json({ message: error.message });
     }
 }

 const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate
            (req.params.id, req.body, { new: true, runValidators: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

 module.exports = {
     getallProducts,
     getProduct,
     createProduct,
     updateProduct,
     deleteProduct
 }