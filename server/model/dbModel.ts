const { Pool } = require("pg");
import * as dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URI,
});


module.exports = 
{
  query: (text, params, callback) => {
    console.log("executed query: ", text);
    return pool.query(text, params, callback);
  },
};
