const express = require('express')
const expressValidator = require('express-validator')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')

// take in routes
const postRoutes = require('./routes/post')
const userRoutes = require('./routes/user')
dotenv.config()

// db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("DB connected!")
})

mongoose.connection.on("error", err => {
    console.log(`DB Connection error: ${err.message}`);
});




// middleware:
app.use(morgan("dev"));
app.use(bodyParser.json());// any request with a 'body' will be parssed to json format
app.use(expressValidator());
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

const port = process.env.PORT || 8000;
console.log(port);
app.listen(port, () => {console.log(`listening on port: ${port}`)});

app.get('/', (req, res) => {
    res.json({success: true, message:"should start the frontend"})
})