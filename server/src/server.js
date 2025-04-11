const express = require("express");
const morgan = require('morgan');
const app = express();


app.use(morgan('dev'));

const isLoggedIn = (req, res, next) => {
 const login = false;
 if(login){
  next();
 }else{
  return res.status(401).json({ message: 'Please login first'});
 }
  next();
};

app.use(isLoggedIn);

app.get("/test", (req, res) => {
    res.status(200).send({
        message: "Api is working"
      })
});

app.get("/api/user", isLoggedIn,(req, res) => {
  res.status(200).send({
      message: "User profile is returned"
    })
});


app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
