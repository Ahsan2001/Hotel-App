const Hotel = require("./../models/hotelModel");


const dotenv = require("dotenv")
dotenv.config({ path: "backend/configuration/config.env" })

require("../configuration/database")

const Hotels = require('./../data/product.json');

// Setting dotenv file

;

const seedProducts = async () => {
    try {

        await Hotel.deleteMany();
        console.log('Hotel are deleted');

        await Hotel.insertMany(Hotels)
        console.log('All Hotel are added.')

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts()