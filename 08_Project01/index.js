const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");


const app = express();
const port = 8000;

// middleware - plugin
app.use(express.urlencoded({extended : false}));

//ROUTES

app.get('/users', (req, res) => {
    const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

app.get("/api/users", (req, res) => {
    return res.json(users);
})

app.get("/api/users/:id", (req, res) => {
    const id= Number(req.params.id);
    const user= users.find(user => user.id === id)
    return res.json(user);
});

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({...body, id:users.length+1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status: "success", id: users.length});
    });
})

app.patch("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    Object.assign(user, req.body);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", message: "User updated" });
    });
})

app.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(user => user.id === id);
    users.splice(index, 1);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", message: "User deleted" });
    });
})

app.listen(port, () => {
    console.log(`server started at port : ${port}`);
})