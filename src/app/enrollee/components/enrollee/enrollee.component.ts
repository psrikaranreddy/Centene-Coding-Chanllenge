import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Enrollee } from 'src/app/shared/models/enrollee';
import { EnrolleeService } from '../../services/enrollee.service';

@Component({
  selector: 'app-enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.scss']
})
export class EnrolleeComponent implements OnInit {

  enrollee: any = {};

  constructor(public dialogRef: MatDialogRef<EnrolleeComponent>, private _snackBar: MatSnackBar, private enrolleeService: EnrolleeService) {

  }

  ngOnInit(): void {

  }
  save() {
    this.enrolleeService.saveEnrollee(this.enrollee, this.enrollee.id).subscribe(res => {
      this.dialogRef.close(true);
      this.showSnak(`Enrollee ${this.enrollee.id ? 'Updated' : 'Added'} Successfull.`);
    }, err => {
      this.showSnak(`Error Occured While ${this.enrollee.id ? 'Updating' : 'Adding'} Enrollee.`);
    })

  }
  close() {
    this.dialogRef.close(false);
  }

  showSnak(message) {
    this._snackBar.open(message, null, {
      duration: 1500,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
