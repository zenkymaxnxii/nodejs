const http = require('http');
const PORT = 3000;
const ChatTokenBuilder = require("./src/ChatTokenBuilder").ChatTokenBuilder;
const appId = "366d251855ce47eb8d387301075c279b";
const appCertificate = "e0514bcd56ed4c43842e9e1dd9b73d93";
const expirationInSeconds = 60*60*24;

const appToken = ChatTokenBuilder.buildAppToken(appId, appCertificate, expirationInSeconds)

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(appToken);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
