const express = require('express')
const { 
    getCakes,
    getCake,
    createCake,
    updateCake,
    deleteCake } = require("../controller/productController");


const productRoute = express.Router();


productRoute.route('/').get(getCakes).post(createCake)
productRoute.route('/:id').get(getCake).put(updateCake).delete(deleteCake)

module.exports = productRoute;
