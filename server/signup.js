const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
app.disable("x-powered-by");
let helmet = require("helmet");
app.use(helmet.hidePoweredBy());
const port = 8000;
const cors = require("cors");
const dbconnection = require("./data");
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.post("/signup", (request, response) => {
  console.log("signup");
  console.log(request.body);
  const object = {
    email: request.body.email,
    mobileno: request.body.mobileno,
    password: request.body.password,
    confirm_password: request.body.cpsw,
    type:request.body.type
  };

  dbconnection.insert(object).then(res=>{
    console.log("response");
    console.log(res);
    response.send(res);
  }).catch(rej=>{
    console.log("rejection");

    response.send(rej);
  });
  console.log("Data added");
});

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`http://localhost:8000`);
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
