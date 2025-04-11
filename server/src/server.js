const express = require("express");
const morgan = require('morgan');
const app = express();


app.use(morgan('dev'));
app.get("/test", (req, res) => {
    res.status(200).send({
        message: "Api is working"
      })
});

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
