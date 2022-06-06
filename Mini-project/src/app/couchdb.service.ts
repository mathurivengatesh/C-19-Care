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

  object:any={
    fname:'',
    lname:'',
    patientid:'',
    dob:'',
    age:'',
    bloodgroup:'',
    gender:'',
    mobileno:'',
    address:'',
    type:'',

  }

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };
  add(db: string, doc: object): Observable<{}> {
    // const url2 = `${this.url}${db}`;
    const url=this.url+db;
    return this.http.post(url, doc, this.httpOptions);
  }
  get(data:any): Observable<{}> {
    // const url = this.url + db + '/_all_docs?include_docs=true';
    const url = this.url +'c_19_care/_find';
    return this.http.post( url,data, this.httpOptions)

  }
}
