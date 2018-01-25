import { Pipe, PipeTransform } from '@angular/core';

/**
 * https://stackoverflow.com/questions/32882013/angular-2-sort-and-filter
 */
@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(arr: Array<any>, arg?: any): any {

    // Check if array exists, in this case array contains articles and args is an array that has 1 element : !id

    if(arr) {

      // get the first element

      let orderByValue = arg;
      let byVal = 1

      // check if exclamation point 
        // reverse the array
      if(orderByValue.charAt(0) == "!") {
        byVal = -1
        orderByValue = orderByValue.substring(1)
      }

      arr.sort((a: any, b: any) => {
        if(a[orderByValue] < b[orderByValue]) {
          return -1*byVal;
        } else if (a[orderByValue] > b[orderByValue]) {
          return 1*byVal;
        } else {
          return 0;
        }
      });
      return arr;
    }
  }

}
