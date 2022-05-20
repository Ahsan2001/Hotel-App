const app = require("./app")
const dotenv = require ("dotenv")
dotenv.config({  path: "backend/configuration/config.env"  })


// get database from mongoDB Server 
require("./configuration/database")


app.listen( process.env.PORT , ()=> {
    console.log (`server is running on http://localhost:${process.env.PORT}`)
} )