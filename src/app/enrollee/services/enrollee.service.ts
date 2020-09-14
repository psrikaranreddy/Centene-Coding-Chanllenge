import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseApi } from './base-api';

@Injectable({
  providedIn: 'root'
})
export class EnrolleeService extends BaseApi{

  constructor(private http:HttpClient) {
    super(http);
   }


  getEnrollees(){
    return this.get(environment.urls.allEnrollees(this.baseUrl));
  }

  getEnrolleById(id){
    return this.get(environment.urls.enrolleeById(id, this.baseUrl));
  }

  saveEnrollee(data, id?){
    if(id){
      return this.put(environment.urls.enrolleeById(id, this.baseUrl), data);
    } else {
      return this.post(environment.urls.allEnrollees(this.baseUrl), data);
    }
  }

  deleteEnrollee(id){
    return this.delete(environment.urls.enrolleeById(id, this.baseUrl));
  }

}
