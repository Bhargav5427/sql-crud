let express = require("express");
const { userController } = require("../controller");
let Routes = express.Router();

Routes.post("/adduser", userController.handlePostUser);
Routes.get("/getuser", userController.handleGetUser);
Routes.delete("/deleteuser/:id", userController.handleDeleteUser);
Routes.put("/updateuser/:id", userController.handleUpdateUser);

module.exports = Routes;
