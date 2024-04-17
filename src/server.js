const express = require("express");

const app = express();


app.post("/users", (request, response)=> {

    
    response.send("você chamou o post");
})
const PORT = 3333;

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
