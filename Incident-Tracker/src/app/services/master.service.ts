import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAPIRESPONSE, User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);

  baseUrl: string = "https://projectapi.gerasim.in/api/IncidentTracking/"



  login(obj: User){
    debugger;
    return this.http.post<IAPIRESPONSE>(`${this.baseUrl}login`,obj)
  }
  getAllUsers(){
    return this.http.get(`${this.baseUrl}GetAllUsers`)
  }
  createNewUser(obj: any){
    return this.http.post(`${this.baseUrl}Register`,obj)
  }
  updateUser(obj: any){
    return this.http.post(`${this.baseUrl}UpdateUser`,obj)
  }
  deleteUserById(id: number){
    return this.http.delete(`${this.baseUrl}DeleteUserByUserId?userId=${id}`)
  }


}
