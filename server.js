const http = require("http");
require("dotenv").config();
const app = require("./app/app");

const port = process.env.PORT || 3000;

http.createServer(app).listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
