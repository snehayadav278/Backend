const { faker } = require('@faker-js/faker');
const mysql =  require('mysql2');
const express= require("express");
const app= express();
const path= require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '@Snehay1707'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ]
}


// let q= "SHOW TABLES";
// inserting new data
// let q= "INSERT INTO user (id, username, email, password) VALUES ?";

// let data=[];
// for(let i=1; i<=100; i++){
//     data.push(getRandomUser());
// }
// let users =[
//      ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//       ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
// ] 



app.get("/", (req, res) =>{
    let q= `SELECT count(*) FROM user`;
    try{
    connection.query(q,(err, result) => {
        if(err) throw err;
        console.log(result);
        res.render("home.ejs");
    });
    }catch(err){
     console.log(err);
    }
    res.send("welcome to home page");
});
app.listen("8080", ()=>{
    console.log("server is listening to 8080");
});

// try{
//     connection.query(q, [data], (err, result) => {
//         if(err) throw err;
//         console.log(result);

// });
// }catch(err){
//     console.log(err);
// }
// connection.end();