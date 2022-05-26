// const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
const port = 8000;
const cors = require("cors");
const dbconnection = require("./data");
const { request } = require("express");
const { response } = require("express");
// const { response } = require("express");
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.post("/signup", (request, response) => {
  console.log(request);
  var object = {
    email: request.body.email,
    mobileno: request.body.mobileno,

    password: request.body.password,
    confirm_password: request.body.cpsw,
  };

  dbconnection.insert(object);
  console.log("Data added");
});

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`htpp://localhost:8000`);
})
app.get("/getsupplier", (request, response) => {
  console.log(request);
  dbconnection.get("c_19_care").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send(err);
    }
  });
});
app.get("/getId/:id", (request, response) => {
  console.log(request);
  dbconnection.getId(request.params.id,"c_19_care").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send(err);
    }
  });
});