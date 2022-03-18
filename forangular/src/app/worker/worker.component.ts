import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormCls } from '../form/forms';
import { AlertifyService } from '../services/alertify.service';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css'],
  providers: [FormService]
})
export class WorkerComponent implements OnInit {
  title = "form list" 
  filterText = ""
  forms : FormCls[] = [];
 
  constructor(private myAlertifyService:AlertifyService,
    private formService:FormService,
    private activatedRoute:ActivatedRoute) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        this.formService.getForms(params["id"]).subscribe(data=>{
          this.forms=data
        })
      })
     }


     addToChart(p:FormCls)
     {
       this.myAlertifyService.success("Sepete eklendi "+p.name)
     }
}
