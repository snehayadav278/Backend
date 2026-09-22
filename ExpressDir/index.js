const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//     // console.log(req);

//     console.log("request received");

//     // res.send("this is a basic response");

//     // res.send({
//     //     name:"apple",
//     //     color:"red"
//     // });

//     let code= "<h1>Fruits</h1> <ul><li>apple</li><li>banana</li>"
//     res.send(code);
// });

// app.get("./", (req, res) => {
//     res.send("hello, i am root");
// } );

// app.get("./apple", (req, res) => {
//     res.send("you contracted apple path");
// } );

// app.get("./orange", (req, res) => {
//     res.send("you contracted orange path");
// } );

// app.get("*", (req, res)=>{
//     res.send("this path doesn't exist");
// });


//path parameters
// app.get("/" , (req, res) => {
//     res.send("hello, i am root");
// });

// app.get("./:username/:id" , (req, res) => {
//    let{username, id}= req.params;
//     res.send(`welcome to the page of @${username}.`);
// });

//query strings
app.get("/search", (req,res)=>{
    let { q } = req.query;
    if(!q){
        res.send("<h1>nothing searched</h1>")
    }
    res.send(`search results for query : ${q}`);
});