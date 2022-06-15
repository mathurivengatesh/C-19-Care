let Cloudant = require("@cloudant/cloudant");
let { type } = require("express/lib/response");
let url =
 "https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudantnosqldb.appdomain.cloud/";
let username = "apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p";
let password = "58de0ca6ebd4250a97d0a7d300191f68";
let _tmp = "name";
let cloudant = Cloudant({ url: url, username: username, password: password });

let insert = function (paramsvalue) {
  return cloudant
    .use("c_19_care")
    .insert(paramsvalue);
    
};
let get=function(dbname){
  return cloudant.use(dbname).list();
}
let getId= function(value,db){
  return cloudant.use(db).get(value);
}
module.exports={insert,get,getId};