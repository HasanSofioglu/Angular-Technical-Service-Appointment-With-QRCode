import { Component, OnInit,NgModule, Input, OnDestroy } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { SharedService } from 'src/app/shared/shared.service'; 

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-succesfuly',
  templateUrl: './succesfuly.component.html',
  styleUrls: ['./succesfuly.component.css']
})
export class SuccesfulyComponent implements OnInit {
  message!:string;

  @Input() refcode!:string;
  public myAngularxQrCode: string="bla";


  constructor(private shared:SharedService) {}

  setMessage(data: string)
  {this.myAngularxQrCode=data}
  ngOnInit(): void {
this.myAngularxQrCode= this.shared.getMessage()
  }
 
}
