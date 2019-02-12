const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
function requestHandler(request, response) {
  response.end(`Requested Path: ${request.url}\nRequest Method: ${request.method}`);
}

var server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});



//run node app.js in command line
//output: Server listening on: http://localhost:8080/PATH

//CREATE = post
/* READ = get
updates = patch or put
delete = delete
*/

