const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware per a poder llegir el body de les peticions
app.use(express.json()); 

//ruta per a les peticions a la API de productes
app.use('/api/products', productRoute);


//CONNEXIÓ A LA BASE DE DADES MONGODB
mongoose.connect("mongodb+srv://brunocolitti:bETUt6svfNsRQkGG@backenddb.sxxct.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to the database");
        app.listen(3000, () => {
            console.log('Server started on http://localhost:3000');
        });
    })
    .catch((error) => {
        console.error('Connection failed:', error);
    });