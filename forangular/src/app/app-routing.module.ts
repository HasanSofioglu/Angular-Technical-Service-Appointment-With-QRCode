import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrcodeComponent } from '@techiediaries/ngx-qrcode';
import { FormComponent } from './form/form.component';
import { SuccesfulyComponent } from './form/succesfuly/succesfuly.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { MainpageComponent } from './mainpage/mainpage.component';
import { TrackpageComponent } from './trackpage/trackpage.component';
import { WorkerComponent } from './worker/worker.component';


const routes: Routes = [
  {path:'mainpage', component:MainpageComponent},
  {path:'',redirectTo:'mainpage',pathMatch:'full'},
  {path:'form', component:FormComponent},
  {path:'worker/:id',component:WorkerComponent},
  {path:'succesfuly', component:SuccesfulyComponent},
  {path:'track', component:TrackpageComponent},
  {path:'login', component:LoginpageComponent},
  {path:'worker', component:WorkerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
