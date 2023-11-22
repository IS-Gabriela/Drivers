const { Router } = require("express");
const DriverRouter = require("./driver_router");

const router = Router();

router.use('/drivers', DriverRouter);

module.exports = router;
