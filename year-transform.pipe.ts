import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearTransform'
})
export class YearTransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //convert
    return value+args;
  }

}
