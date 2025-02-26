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
