const Cloudant = require("@cloudant/cloudant");
const { type } = require("express/lib/response");
const url =
 "https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudantnosqldb.appdomain.cloud/";
const username = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
const password = "58de0ca6ebd4250a97d0a7d300191f68";
const _tmp = "name";
const cloudant = Cloudant({ url: url, username: username, password: password });

insert = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use("c_19_care")
    .insert(paramsvalue)
    .then((data) => {
      console.log("Login Data Inserted into CDB" + data);
    })
    .catch((err) => {
      console.log(err);
    });
};
get=function(dbname){
  return cloudant.use(dbname).list();
}
getId= function(value,db){
  return cloudant.use(db).get(value)
}
module.exports={insert,get,getId};