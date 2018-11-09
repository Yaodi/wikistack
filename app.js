const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App is listening in port ${PORT}`);
});
