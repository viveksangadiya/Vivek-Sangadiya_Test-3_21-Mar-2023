import { Component, ViewChild } from '@angular/core';
import { ApiServiceService } from './helper/api-service.service';
import { Program } from './model/Program';
import { DialogEditEventArgs, EditSettingsModel, SaveEventArgs, ToolbarItems, DataSourceChangedEventArgs } from '@syncfusion/ej2-angular-grids';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test3';
  resultData: Program[] = [];

  //  public editSettings!:EditSettingsModel;
  constructor(private api_service: ApiServiceService, private dialog: MatDialog) { }

  ngOnInit() {
    // this.editSettings = { allowEditing: true, mode: 'Normal' };
    this.api_service.getProgramData().subscribe(res => {
      this.resultData = res
      console.log(res)
    }
    )
  }

  onEdit(program: Program) {
    this.dialog.open(UpdateComponent, {
      width: '900px',
      data: program,
    });
  }

  onActiveChangeChange(program: Program) {
    this.api_service.isActiveData(program.programID).subscribe(res =>
      console.log(res)
    )
  }

  onDeActiveChangeChange(program: Program) {
    this.api_service.isDeactiveData(program.programID).subscribe(res => console.log(res)
    )
  }


  openAddComponentDialog() {
    this.dialog.open(AddComponent, {
      width: '900px',
      restoreFocus: true,
    });

  }

}

