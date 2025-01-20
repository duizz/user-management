const express = require('express');
const userRoutes = express.Router();
const UserController = require('../controllers/UserController')

//User routes
userRoutes.post('/user', UserController.createUser);
userRoutes.get('/users', UserController.getAllUsers);
userRoutes.get('/user/:id', UserController.getUserById);
userRoutes.put('/user/:id', UserController.updateUser);
userRoutes.delete('/user/:id', UserController.deleteUser);

module.exports = userRoutes;