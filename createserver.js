const http = require("http");
const server = http.createServer((request, response) => {
	if (request.url === "/") {
		response.writeHead(200, { "Content-Type": "text/plain" });
		response.end("This is the home page!");
	} else if (request.url === "/about") {
		response.writeHead(200, { "Content-Type": "text/plain" });
		response.end("This is the about page!");
	} else {
		response.writeHead(404, { "Content-Type": "text/plain" });
		response.end("404 Page Not Found!");
	}
});
server.listen(8080);


const express = require("express");
const app = express();

app.get("/", (request, response) => {
	response.send("This is the home page!");
});

app.get("/about", (request, response) => {
	response.send("This is the about page!");
});

app.use((request, response) => {
	response.status(404).send("404 Page Not Found!");
});

app.listen(8080);