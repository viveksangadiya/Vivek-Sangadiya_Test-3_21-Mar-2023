import { Component, Inject, Input, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/helper/api-service.service';
import { Program } from 'src/app/model/Program';
import { AddComponent } from '../add/add.component';
import { Grid, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
 @ViewChild('grid') grid:GridComponent|undefined
  isEdit: boolean = false;
  constructor(private apiService: ApiServiceService, public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Program | undefined) {
    if (data) {
      this.program = data;
      this.isEdit = true;
    }
  }

  program: Program = {
    programID: '',
    programNumber: '',
    programName: '',
    programDescription: '',
    canDelete: false,
    isActive: false,
    programBudget: 0,
    isVirtual: false
  };

  onSubmit() {
  }

  onUpdateData() {
    if (this.isEdit) {

      this.apiService.editProgram(this.program!).subscribe((res: any) => {
        this.program = res
        console.log(this.program)
      })
      this.dialogRef.close();
      this.grid?.refresh();
    }
  }
}
