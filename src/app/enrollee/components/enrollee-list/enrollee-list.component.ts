import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {  EnrolleeService } from '../../services/enrollee.service';
import { Enrollee } from 'src/app/shared/models/enrollee';
import { MatDialog } from '@angular/material/dialog';
import { EnrolleeComponent } from '../enrollee/enrollee.component';
import { ConfirmationComponent } from 'src/app/sgared/components/confirmation/confirmation.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-enrollee-list',
  templateUrl: './enrollee-list.component.html',
  styleUrls: ['./enrollee-list.component.scss']
})
export class EnrolleeListComponent implements  OnInit {
  displayedColumns: string[] = ['id','name', 'dateOfBirth', 'active', 'options'];
  data: Enrollee[] = []
  allData: Enrollee[]=[];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  pageIndex: number = 0;
  pageSize: number = 10;

  constructor(private enrolleeService:EnrolleeService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.enrolleeService.getEnrollees().subscribe((res:any)=>{
      this.allData= res;
      this.getPagedData();
    })
  }
  getPagedData(){
    this.data= this.allData.slice(this.pageIndex*this.pageSize,(this.pageIndex+1)*this.pageSize);
  }
  editEnrollee(enrollee) {
    let ref = this.dialog.open(EnrolleeComponent,{width: '300px', hasBackdrop:true, closeOnNavigation:true, disableClose: true  });
    ref.componentInstance.enrollee = JSON.parse(JSON.stringify(enrollee));
    ref.afterClosed().subscribe(res=>{
      if(res){
        this.getData();
      }
    })

  }

  deleteEnrollee(enrolle){
    let ref = this.dialog.open(ConfirmationComponent, {width: '500px', hasBackdrop:true, closeOnNavigation:true, disableClose: true  });
    ref.componentInstance.message = `Are you sure. Do you want to delete Enrollee "${enrolle.name}" ?`;
    ref.afterClosed().subscribe(res=>{
      if(res){
        this.enrolleeService.deleteEnrollee(enrolle.id).subscribe(res=>{
          this.showSnak(` Enrollee "${enrolle.name}" deleted successfylly.`);
          this.getData();
        }, err=> {
          this.showSnak(` Error occured while deleting Enrollee "${enrolle.name}".`);
        })
      }
    })
  }

  onPage(page){
    console.log(page);
    this.pageIndex = page.pageIndex;
    this.pageSize = page.pageSize;
    this.getPagedData();
  }

  showSnak(message) {
    this._snackBar.open(message, null, {
      duration: 1500,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
