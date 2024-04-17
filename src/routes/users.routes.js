const {Router} = require("express");

const usersRouter = Router();


usersRouter.post("/", (request, response)=> {
    const { name, email, password} = request.body;
        
        //response.send(`Usuario: ${name}. E-mail: ${email}. e password: ${password}`);
        response.json({name, email, password});
    })

    module.exports = usersRouter;