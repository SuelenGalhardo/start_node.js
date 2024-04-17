const express = require("express")

const app =  express();

app.get("/", (request, response) => {

    response.send("hello word");

})

const PORT = 3333;

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));