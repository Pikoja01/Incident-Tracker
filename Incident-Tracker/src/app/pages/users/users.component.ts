import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-users',
  imports: [ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {


  userForm: FormGroup = new FormGroup({});
  masterSrv = inject(MasterService)
  userList = signal<any[]>([]);

  constructor(){
    this.initalizeForm()
  }

  ngOnInit(): void {
    this.loadUsers();
  }


  initalizeForm(userData?: any){
    this.userForm = new FormGroup({
      userId: new FormControl(userData ? userData.userId: 0),
      userName: new FormControl(userData ? userData.userName: ""),
      emailId: new FormControl(userData ? userData.emailId: ""),
      fullName: new FormControl(userData ? userData.fullName: ""),
      password: new FormControl(userData ? userData.password: ""),
      role: new FormControl(userData ? userData.role: "")
    
    })
  }
  loadUsers(){
    this.masterSrv.getAllUsers().subscribe((res:any)=>{
      this.userList.set(res.data)
    })
  }

  onEdit(userData: any){
    this.initalizeForm(userData)
  }

  onSaveUser(){
    const formValue = this.userForm.value;
    debugger;
    this.masterSrv.createNewUser(formValue).subscribe((res:any)=>{
      if(res.result){
        alert("User Created Success")
        this.loadUsers();
      }else{
        alert(res.message)
      }
    })
  }

  onUpdateUser(){
    const formValue = this.userForm.value;

    formValue.createdDate = new Date();
    formValue.projectName = "IncidentTracking";
    formValue.refreshToken = new Date();
    formValue.refreshTokenExpiryTime = new Date();
    debugger;
    this.masterSrv.updateUser(formValue).subscribe((res:any)=>{
      if(res.result){
        alert("User Updated Successfully")
        this.loadUsers();
      }else{
        alert(res.message)
      }
    })
  }

  onDelete(id: number){
    const isDelete = confirm("Are you sure you want to delete")
    if(isDelete){
      this.masterSrv.deleteUserById(id).subscribe((res: any)=>{
        if(res.result){
          alert("User Deleted Successfully")
          this.loadUsers();
        }else{
          alert(res.message)
        }
      })
    }

  }

}
