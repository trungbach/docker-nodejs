const express = require("express");
const database = require("ronin-database");
const app = express();

async function main() {
  try {
    await database.connect(process.env.CONNECTIONTSRING);
  } catch (error) {
    console.error(error);
  }
}

main();

app.get("/", (req, res) => {
  console.log("Hello world");
  res.json("hello ");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log("app running on port: 3000");
});
