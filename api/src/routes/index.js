const { Router } = require('express');
// import all routers;
const movementsRouter = require('./movements.js');
const pacienteRouter = require('./paciente.js');
const historyClinic = require('./historyClinic.js');

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/movements', movementsRouter);
router.use('/paciente', pacienteRouter);
router.use('/historyClinic', historyClinic);

module.exports = router;