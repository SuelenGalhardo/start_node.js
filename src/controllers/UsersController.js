const AppError = require("../utils/AppError");

class UsersController {
create(request, response){
    const { name, email, password} = request.body;

    if(!name){
        throw new AppError("Nome é obrigatorio");
    }
        
        //response.send(`Usuario: ${name}. E-mail: ${email}. e password: ${password}`);
       // response.status(201).json({name, email, password}); status(htttp codes) é opcional
       response.json({name, email, password});

}

    
}


module.exports = UsersController;


//porque usamos class e nao uma funçao? porque a class permite que dentro dela 
// eu posso ter varias funçoes e tbm acessar varias funçoes. constroller pode ter nomaximo 5 metodos. 