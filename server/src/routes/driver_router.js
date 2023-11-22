const { Router } = require("express");
//const DriverHandler = require('../handlers/driver_handler');

const driverRouter = Router();

//driverRouter.get('/', DriverHandler.getDrivers);

driverRouter.get('/:idDriver', (req, res)=>{
  res.status(200).send('Detalle de drivers');
});

module.exports = driverRouter;