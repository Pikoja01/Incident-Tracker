import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { CreateIncidentComponent } from './pages/create-incident/create-incident.component';
import { IncidentsListComponent } from './pages/incidents-list/incidents-list.component';

export const routes: Routes = [
   
    {
        path: "",
        redirectTo:"login",
        pathMatch:"full"
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"",
        component: HeaderComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'create-new',
                component: CreateIncidentComponent
            },
            {
                path: 'incident-list',
                component: IncidentsListComponent
            },
            
        ]
    }
];
