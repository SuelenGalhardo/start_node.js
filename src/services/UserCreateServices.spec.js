const UserCreateServices  = require('./UserCreateServices')
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');
const AppError = require('../utils/AppError');



describe("UserCreateServices", () => {
    
   let userRepositoryInMemory = null
    let userCreateServices = null;


beforeEach(() => { 
    userRepositoryInMemory = new UserRepositoryInMemory();
    userCreateServices = new UserCreateServices(userRepositoryInMemory);

});




it("User should be create", async () => {

    const user = {
        name: "User test",
        email: "User@test.com",
        password: "123"
    };
    

    const userCreated = await userCreateServices.execute(user);

    //console.log(userCreated)

   expect(userCreated).toHaveProperty("id");

   // expect(userCreated).not.toHaveProperty("id");

});

it ("user not should be create with exists email", async() =>{

    const user1 = {
        name: "User test 1",
        email: "User@test.com",
        password: "123"
    };
    const user2 = {
        name: "User test 2",
        email: "User@test.com",
        password: "456"
    };
 

    await userCreateServices.execute(user1);
    await expect(userCreateServices.execute(user2)).rejects.toEqual( new AppError("Este correo electrónico ya está en uso."));
});


});