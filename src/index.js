const app = require("./app");
const config = require("./config/config");

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`);
});
