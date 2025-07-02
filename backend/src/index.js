const dotenv=require("dotenv");
dotenv.config()

console.log("=== ENV TEST ===");
console.log("PORT:", process.env.PORT);

const app=require("./app");
const MongodbConnection = require("./db/db");

MongodbConnection();