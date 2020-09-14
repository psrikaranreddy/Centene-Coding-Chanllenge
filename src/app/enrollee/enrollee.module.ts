import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { EnrolleeRoutingModule } from './enrollee-routing.module';
import { EnrolleeComponent } from './components/enrollee/enrollee.component';
import { EnrolleeListComponent } from './components/enrollee-list/enrollee-list.component';

@NgModule({
  declarations: [EnrolleeListComponent, EnrolleeComponent],
  imports: [
    CommonModule,
    EnrolleeRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class EnrolleeModule { }
