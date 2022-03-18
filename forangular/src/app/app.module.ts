import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { QRCodeModule } from 'angularx-qrcode';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { FormComponent } from './form/form.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuccesfulyComponent } from './form/succesfuly/succesfuly.component';
import { AlertifyService } from './services/alertify.service';
import { TrackpageComponent } from './trackpage/trackpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WorkerComponent } from './worker/worker.component';
import { FormFilterPipe } from './worker/form-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MainpageComponent,
    SuccesfulyComponent,
    TrackpageComponent,
    LoginpageComponent,
    WorkerComponent,
    FormFilterPipe
    
 
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    QRCodeModule,
 
  ],
  providers: [
    AlertifyService,
    FormBuilder,],
  bootstrap: [AppComponent]
})
export class AppModule { }
