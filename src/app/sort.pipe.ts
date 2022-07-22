import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    const newArray = value.sort((a: {name: string}, b: {name: string}) => {
      return (a.name > b.name) ? 1 : -1
    })
    return newArray

  }
}


