import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const fila of value) {
      console.log(fila);
      if (fila.pista.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
       
        resultPosts.push(fila);
        
      };
    };
    console.log(resultPosts);
    return resultPosts;
  }


}
