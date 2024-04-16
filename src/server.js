const express = require("express")

const app =  express();

const PORT = 3334;

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`))