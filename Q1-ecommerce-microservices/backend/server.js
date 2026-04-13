const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
 host: 'database',
 user: 'root',
 password: 'rootpassword',
 database: 'ecommerce_db'
});

db.connect((err)=>{
 if(err){
  console.log("DB connection failed", err.message);
 } else {
  console.log("Connected to DB");
 }
});

app.get('/', (req,res)=>{
 res.send("Hello from Backend");
});

app.listen(5000, ()=>{
 console.log("Server running on port 5000");
});
