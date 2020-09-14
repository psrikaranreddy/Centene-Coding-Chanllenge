import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotreadyComponent } from './notready/notready.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminLayoutComponent,
    children:[
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'enrollee',
        loadChildren:  ()=> import('./enrollee/enrollee.module').then(m => m.EnrolleeModule) 
      },
      {
        path:'**',
        component: NotreadyComponent
      }
    ]
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'admin/enrollee/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
