import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import {GridModule,PagerModule,EditService,ToolbarService,GridAllModule} from '@syncfusion/ej2-angular-grids'
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import { InterceptorService } from './helper/interceptor.service';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateComponent } from './components/update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    PagerModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    GridAllModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    },
    EditService,
    ToolbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
