const AppError = require("../utils/AppError");
const sqliteConnection =require("../database/sqlite");


class UsersController {


    async  create(request, response){
       const { name, email, password} = request.body;
  

       const database = await sqliteConnection();
       const checkUsersExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

       if(checkUsersExists){

        throw new AppError("este email ja esta em uso. ")     
    
    }
    await database.run("INSERT INTO users(name, email, password ) VALUES(?, ?, ?)",
    [name, email, password]
    
    );


    return response.status(201).json();


}

    
}


module.exports = UsersController;


//porque usamos class e nao uma funçao? porque a class permite que dentro dela 
// eu posso ter varias funçoes e tbm acessar varias funçoes. constroller pode ter nomaximo 5 metodos. 

