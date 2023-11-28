const { Router } = require("express");
const router = Router();

const 
{
    getDriversHandler,
    getDriverByIdHandler,
    getTeamsHandler,
    postDriversHandler
} = require('../handlers/driverHandlers');
//----------------------------------------------
router.get("/drivers", getDriversHandler); 
router.get("/drivers/:id", getDriverByIdHandler); 
router.get("/teams", getTeamsHandler); 
router.post("/drivers", postDriversHandler); 

module.exports = router;
