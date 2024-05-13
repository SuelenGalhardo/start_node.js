const { Router, response, request } = require('express');
const multer = require("multer")
const uploadConf = require("../configs/upload")


const UsersController = require('../controllers/UsersController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const upload = multer(uploadConf.MULTER)


const usersController = new UsersController();


usersRoutes.post('/', usersController.create);
usersRoutes.put('/',ensureAuthenticated, usersController.update); 
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response)=> {
    //console.log(request.file.filename)
    //response.json();
    try {
        if (!request.file) {
            return response.status(400).json({ error: 'No file uploaded.' });
        }
        
        console.log('File uploaded successfully:', request.file.filename);
        response.json({ message: 'File uploaded successfully.' });
    } catch (error) {
        console.error('Error saving file:', error);
        response.status(500).json({ error: 'Failed to save file.' });
    }
})


module.exports = usersRoutes;