import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
})
export class ConfirmationComponent implements OnInit {
  @Input() message:string ='';
  constructor(public dialogRef: MatDialogRef<ConfirmationComponent>) { }

  ngOnInit(): void {
  }

  close(res){
    this.dialogRef.close(res);
  }

}
