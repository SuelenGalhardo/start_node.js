const { Router, response } = require('express');
const multer = require("multer")
const uploadConfig = require("../configs/upload");

const UsersController = require('../controllers/UsersController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController();
//const userAvatarController = new UserAvatarController();

usersRoutes.post('/', usersController.create);
usersRoutes.put('/',ensureAuthenticated, usersController.update);  //actualizar propriedades no banco de datos mais de um campo 
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response)=>{
    console.log(request.file.filename);
     response.json();
    // try {
    //     console.log(request.file.filename);
    //     response.json({ message: "Avatar uploaded successfully" });
    // } catch (error) {
    //     console.error("Error uploading avatar:", error);
    //     response.status(500).json({ message: "Error uploading avatar" });
    // }
});   //patch actualizar un objeto especifico, em este caso a foto/avatar



module.exports = usersRoutes;