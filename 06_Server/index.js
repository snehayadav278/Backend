const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) =>{
    if(req.url === "/favicon.ico"){
            res.writeHead(204);
            return res.end();
    }
    
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    const log= `${Date.now()} : ${myUrl.pathname} New Request Received\n`;

    fs.appendFile('log.txt', log, (err, data) => {
        switch(myUrl.pathname){
            case "/" :
                res.end("Home Page");
                break;
            case "/about":
                const username= myUrl.query.myname;
                res.end(`Hi, ${username}`);
                res.end("I am Sneha");
                break;
            case "/search":
                const search= myUrl.query.search_query;
                res.end(`Here are your search results for: "${search}"`);
                break;
            default:
                res.end("404 Not Fount");
        }
    });
});

myServer.listen(8000, () => {
    console.log("server started");
});

