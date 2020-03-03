const express = require('express')
const path = require('path')

const publicPath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000

const app = express()

app.use(express.static(publicPath))

// app.get('./project-image', (req,res) => {
//     res.sendFile(path.join(publicPath,'project-default.png'))
// })

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath,'index.html'))
})

app.listen(port, () => {
    console.log('portal-server is up on port ', port);
})


