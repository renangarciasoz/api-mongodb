const express = require('express');

module.exports = function(server) {

    // Iniciar rotas da API
    const router = express.Router();
    server.use('/api', router);
    
    // Registrar os methods na rota
    const itemService = require('../api/items/itemService');
    itemService.register(router, '/item');
}