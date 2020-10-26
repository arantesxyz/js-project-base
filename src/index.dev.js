console.log("Setting up DEVELOPMENT mode!");
process.env.NODE_ENV = "DEVELOPMENT";

console.log("Setting up variables from '.env' file");
require("dotenv").config();

console.log("Starting app...");
require("./index")