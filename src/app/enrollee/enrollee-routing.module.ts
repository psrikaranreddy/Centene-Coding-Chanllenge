import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrolleeListComponent } from './components/enrollee-list/enrollee-list.component';


const routes: Routes = [
    {
    path:'list',
    component: EnrolleeListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrolleeRoutingModule { }
