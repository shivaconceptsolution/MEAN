import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})

export class TruckComponent implements OnInit {
  data:string='';
  tid:string='';
  tdesc:string='';
   constructor(private http: HttpClient) { }

  ngOnInit() {
  //this.editstu ();
    this.deletestu ();
  }

  addTruck () {

   let t = {"name":"suresh","gender":"male","email":"suresh@gmail.com","phone":"9812312345"};
  this.http.post("http://localhost:8080/api/contacts",t,httpOptions).subscribe((res)=>{
            console.log(res);
           
        });
        alert('data inserted');
}
editstu () {

   let t = {"name":"sharukh","gender":"male","email":"sharukh@gmail.com","phone":"12333333"};
  this.http.put("http://localhost:8080/api/contacts/5e456b14e507fa18e44f6c76",t,httpOptions).subscribe((res)=>{
            console.log(res);
           
        });
        alert('data updated');
}

deletestu () {

   
  this.http.delete("http://localhost:8080/api/contacts/5e456b14e507fa18e44f6c76",httpOptions).subscribe((res)=>{
            console.log(res);
           
        });
        alert('data deleted');
}
}