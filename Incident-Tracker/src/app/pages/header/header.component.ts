import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

loggedUserData: any;
router = inject(Router)

    constructor(){
      const data = localStorage.getItem("incidentUser");
      if(data != null){
        this.loggedUserData = JSON.parse(data);
      }
    }


    logOff(){
      localStorage.removeItem("incidentUser");
      this.router.navigateByUrl("/login")
    }
}
