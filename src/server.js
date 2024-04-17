const express = require("express");

const app = express();
app.use(express.json());


app.post("/users", (request, response)=> {
const { name, email, password} = request.body;
    
    //response.send(`Usuario: ${name}. E-mail: ${email}. e password: ${password}`);
    response.json({name, email, password});
})
const PORT = 3333;

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
