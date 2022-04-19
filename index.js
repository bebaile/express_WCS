const express = require("express");
const port = 3000;
const app = express();
app.listen(port, (err) => {
  if (err) {
    console.error("something bad happened");
  } else {
    console.log(`listening on port ${port}`);
  }
});
