import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-incidents-list',
  imports: [],
  templateUrl: './incidents-list.component.html',
  styleUrl: './incidents-list.component.css'
})
export class IncidentsListComponent implements OnInit {

  loggedUserData: any;
  incidentList: any[] = []

  masterSrv = inject(MasterService);

  constructor() {
    const data = localStorage.getItem("incidentUser");
    if (data != null) {
      this.loggedUserData = JSON.parse(data);
    }
  }

  ngOnInit(): void {
    if(this.loggedUserData.role == 'User'){
      this.getIncidentCreatedByUser();
    } else if (this.loggedUserData.role == "IncidentAdmin"){
        this.getAllIncidents();
    }else if (this.loggedUserData.role == "Support Staff"){
      this.getAllIncidents();
  }
  }


  getIncidentCreatedByUser() {
    this.masterSrv.getIncidentCreatedByUser(this.loggedUserData.userId).subscribe((res: any) => {
      this.incidentList = res;
    })
  }
  getAllIncidents() {
    this.masterSrv.getAllIncidents().subscribe((res: any) => {
      this.incidentList = res;
    })
  }
  getIncidentAssigntoUser() {
    this.masterSrv.getIncidentAssigntoUser(this.loggedUserData.userId).subscribe((res: any) => {
      this.incidentList = res;
    })
  }


}
