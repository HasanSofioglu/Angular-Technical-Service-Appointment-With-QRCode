import { Pipe, PipeTransform } from '@angular/core';
import { FormCls } from '../form/forms';


@Pipe({
  name: 'formFilter'
})
export class FormFilterPipe implements PipeTransform {

  transform(value: FormCls[],filterText?:string):FormCls[] {
      if(filterText)
      {
        return value.filter((p:FormCls)=>p.name.toLocaleLowerCase()
        .indexOf(filterText.toLocaleLowerCase())!==-1)
      }
      else
      {
        return value;
      }
  } 

 
}
