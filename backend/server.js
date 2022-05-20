const app = require("./app")
const dotenv = require ("dotenv")
 

dotenv.config({  path: "backend/configuration/config.env"  })


app.listen( process.env.PORT , ()=> {
    console.log (`server is running on hhttp://localhost:${process.env.PORT}`)
} )