const { Router } = require('express');
const activities = require('./activities');
const countries = require('./countries');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use( countries )
router.use( activities )


module.exports = router;
