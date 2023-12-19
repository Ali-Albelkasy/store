const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
app.use(express.json())
app.use(require('./router/app.routes'))
mongoose.connect('mongodb+srv://alimostafa016979:WcJSejTQC0CVIu2J@cluster0.o6aqivx.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected');
})
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))