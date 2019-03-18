import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value,"value")
    if(!value) return value;
    if(value=='') return value;
    if(!args)return value;
    console.log(args,"value")
    
    return value.filter(array=>
      array.title.toLowerCase().indexOf(args.toLowerCase()) !==-1
    )
  }

}
