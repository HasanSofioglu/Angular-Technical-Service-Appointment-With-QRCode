import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AlertifyService } from '../services/alertify.service';

import { FormService } from '../services/form.service';
import { SharedService } from '../shared/shared.service';
import { FormCls } from './forms';
import { SuccesfulyComponent } from './succesfuly/succesfuly.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[FormService]
})
export class FormComponent implements OnInit {



   refnumber:number=0;

   message:string="test";
  constructor(
    private formBuilder:FormBuilder,
    private formService:FormService,
    private alertifyservice:AlertifyService,
    private shared:SharedService,
    
    private router:Router,
    
    
  ) { this.refnumber=this.getRandomInt(5000,100000)
 }
  
 
   
  fixAddForm!: FormGroup;
  form:FormCls=new FormCls();
    
  ngOnInit(): void {
    this.createfixAddForm();
 
    this.shared.setMessage(this.message)
    }
  
  getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
  
  createfixAddForm(){

    
    
    this.refnumber=this.getRandomInt(1000,50000),
    
    this.fixAddForm=this.formBuilder.group(
      {name:["",Validators.required],
      email:["",Validators.required],
      phoneNumber:["",Validators.required],
      refNumber:this.refnumber,
      deviceModel1:["",Validators.required],
      deviceModel2:["",Validators.required],
      deviceModel3:["",Validators.required],
      deviceimei:["",Validators.required],
      devicePassword:["",Validators.required],
      detailProblem:["",Validators.required],
        
      }
    )
    this.message=this.refnumber.toString()
  }
   add(){
    
    if(this.fixAddForm.valid){
      this.form = Object.assign({}, this.fixAddForm.value)
      //this.product = this.productAddForm.value as Product
 
      this.formService.addForm(this.form).subscribe(data=>{
        this.alertifyservice.success(data.name+" başarıyla eklendi.")
       this.refnumber=data.id
      })
      this.router.navigate(["succesfuly"])
      
    }
    else
    this.alertifyservice.warning("Lütfen verileri tam giriniz.")
  }

}
