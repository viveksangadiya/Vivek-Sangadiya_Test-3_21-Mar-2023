import { Component, ViewChild } from '@angular/core';
import { ApiServiceService } from './helper/api-service.service';
import { Program } from './model/Program';
import { DialogEditEventArgs, EditSettingsModel, SaveEventArgs, ToolbarItems, DataSourceChangedEventArgs, Grid, GridComponent } from '@syncfusion/ej2-angular-grids';
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
  isSuccess:boolean | undefined;
  @ViewChild('grid') grid:GridComponent|undefined;

   public editSettings!:EditSettingsModel;
  constructor(private api_service: ApiServiceService, private dialog: MatDialog) { }

  ngOnInit() {
    this.editSettings = { allowEditing: true, mode: 'Normal' };
    this.api_service.getProgramData().subscribe(res => {
      this.resultData = res
      console.log(res)
      this.grid?.refresh()
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
     {

      // this.isSuccess=res.success
      // console.log(this.isSuccess);
      console.log(res)
    }
    )
  }

  onDeActiveChangeChange(program: Program) {
    this.api_service.isDeactiveData(program.programID).subscribe(res =>
      {

        // this.isSuccess=res.success
        // console.log(this.isSuccess);
        
        console.log(res)
      }
    )
  }


  openAddComponentDialog() {
    this.dialog.open(AddComponent, {
      width: '900px',
      restoreFocus: true,
    });

  }

}

