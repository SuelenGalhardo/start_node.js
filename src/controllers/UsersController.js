class UsersController {
create(request, response){
    const { name, email, password} = request.body;
        
        //response.send(`Usuario: ${name}. E-mail: ${email}. e password: ${password}`);
        response.json({name, email, password});

}

    
}


module.exports = UsersController;


//porque usamos class e nao uma funçao? porque a class permite que dentro dela 
// eu posso ter varias funçoes e tbm acessar varias funçoes. constroller pode ter nomaximo 5 metodos. 