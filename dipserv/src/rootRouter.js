const express = require("express");
const authRouter = require("./modules/_auth/router");
const slotsRouter = require("./modules/_slots/router");
const ticketsRouter = require("./modules/_tickets/router");

const rootRouter = express.Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/slots', slotsRouter);
rootRouter.use('/tickets', ticketsRouter);

module.exports = rootRouter;