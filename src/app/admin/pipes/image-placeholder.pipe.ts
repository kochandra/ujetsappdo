import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePlaceholder'
})
export class ImagePlaceholderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value)
      return value;
    else
      return 'assets/RFI_upload_icon.png';
  }

}
