const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ success: true });
});

app.listen(8080, () => {
  console.log(`server started on 8080`);
});
