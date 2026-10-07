const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
    let filePath;

    if (req.url === "/home" || req.url === "/") {
        filePath = path.join(__dirname, "public", "home.html");
    } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
    } else if (req.url === "/contact") {
        filePath = path.join(__dirname, "public", "contact.html");
    } else if (req.url === "/style.css") {
        filePath = path.join(__dirname, "public", "style.css");
    } else {
        filePath = path.join(__dirname, "public", "404.html");
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("<h1>500 - Internal Server Error</h1>");
            return;
        }

        const contentType = path.extname(filePath) === ".css"
            ? "text/css"
            : "text/html";

        const statusCode = filePath.includes("404.html") ? 404 : 200;

        res.writeHead(statusCode, { "Content-Type": contentType });
        res.end(content);
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});