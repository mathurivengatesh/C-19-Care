import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouchdbService {
  url='https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudantnosqldb.appdomain.cloud/'
  dbUserName='apikey-v2-2mxwaz89u58vkezj2e5jfc41xn3komuaq1j49fhhmu8p';
  dbPassword ='58de0ca6ebd4250a97d0a7d300191f68';
  basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  object:any;

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };
  add(db: string, doc: object): Observable<{}> {
    
    const url=this.url+db;
    return this.http.post(url, doc, this.httpOptions);
  }
  get(data:any): Observable<{}> {
   
    const url = this.url +'c_19_care/_find';
    return this.http.post( url,data, this.httpOptions)

  }
  Delete(id: any,rev:any): Observable<{}>  {
    console.log(id);
    console.log(rev);
  this.url= this.url+'c_19_care/'+id+'?rev='+rev;
  return this.http.delete(this.url,this.httpOptions)
  }
  patientLogin(){
    const url =  this.url +'c_19_care/_find';
    const basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this. dbPassword );
    const object = {
      selector: {
        type: 'patient',
      },
    };
    return this.http.post(url, object, {
      headers: { Authorization: basicAuth },
    });
  }
  
  patientIdExist(patient:any){
    const url =  this.url +'c_19_care/_find';
    const basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this. dbPassword );
    const object = {
      selector: {
        type: patient.type,
        patientid: patient.patientid
      },
    };
    return this.http.post(url, object, {
      headers: { Authorization: basicAuth },
    });
  }
    emailExist(user:any){
      const url =  this.url +'c_19_care/_find';
      const basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this. dbPassword );
      const object = {
        selector: {
          type: user.type,
          email: user.email
        },
      };
    
    return this.http.post(url, object, {
      headers: { Authorization: basicAuth },
    });
  }
  addInfoEdit(data:any){
    const url =  this.url +'c_19_care/_find';
    const basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this. dbPassword );
    console.log(data);
    return this.http.post(url, data, {
      headers: { Authorization: basicAuth },
    });
  }
  getpatient(data:any){
    const url="https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudantnosqldb.appdomain.cloud/c_19_care/_design/patientpage/_view/detail"
    return this.http.post(url,data,this.httpOptions)
  }
  getAllData(docId:Array<string>){
    console.log(docId)
    const url = `https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudantnosqldb.appdomain.cloud/c_19_care/_all_docs?include_docs=true&keys=["`+docId.join('","')+`"]`
   
    return this.http.get(url,this.httpOptions);
  }
  getDataById(id:string){
    // console.log(docId)
    const url = `https://75c481c7-3349-4ad5-86c0-311dd22187eb-bluemix.cloudantnosqldb.appdomain.cloud/c_19_care/${id}`
   
    return this.http.get(url,this.httpOptions);
  
  }
}
