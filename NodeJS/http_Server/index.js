const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()} ${req.url} New req received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile('text.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end('This is Home page');
                break;
            case "/about":
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;
            case "/contact":
                res.end('Email: deepak.rajput.23@navgurukul.org\nLinkdIn: DeepakRajput||LinkdIn');
                break;
            default:
                res.end('404 Not found!');
        }
    });
})

myServer.listen(8000, () => console.log("Server started"));

