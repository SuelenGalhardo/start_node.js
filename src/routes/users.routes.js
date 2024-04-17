const {Router} = require("express");
const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function myMiddeleware(request, response, next){
console.log("você passou pelo Middleware")

if(!request.body.isAdmin){

    return response.json({ message: "user unautjorized"})
}


next();

}
const usersController = new UsersController();

usersRoutes.use(myMiddeleware);
usersRoutes.post("/", myMiddeleware, usersController.create);

    module.exports = usersRoutes;
