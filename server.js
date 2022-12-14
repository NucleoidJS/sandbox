require("dotenv").config();
const app = require("./src/app");

if (process.env.DEBUG !== "true") {
  console.debug = () => {};
}

app.listen(process.env.PORT);
