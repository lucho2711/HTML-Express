const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath))

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})

app.listen(3000, () => {
    console.log("Abriendo Server en Puerto 3000")
})
