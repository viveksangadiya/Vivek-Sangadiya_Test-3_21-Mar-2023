import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/helper/api-service.service';
import { Program } from 'src/app/model/Program';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private apiService: ApiServiceService, public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Program | undefined) {
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
    this.apiService.addProgram(this.program);
    console.log(this.program);
  }

  onSubmission() {
    console.log(this.program);
    this.apiService.addProgram(this.program).subscribe((res: any) => {
      this.program = res
      console.log(this.program)
    }
    )
    this.dialogRef.close();
  }

  onUpdateData() {
    this.apiService.editProgram(this.program).subscribe((res: any) => {
      this.program = res
      console.log(this.program)
    })
  }
}
