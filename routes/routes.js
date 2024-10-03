const express = require('express');
const router = express.Router();
const controllerEventos = require('../controllers/eventos');

router.get('/', controllerEventos.listaEventos);
router.get('/detalhes-evento/:id', controllerEventos.detalhesEvento);

router.post('/cadastro-evento', controllerEventos.cadastrarEventos);

module.exports = router;
