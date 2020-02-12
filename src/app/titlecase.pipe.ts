import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    if (typeof value !== 'string') {
      //throw invalidPipeArgumentError(UpperCasePipe, value);
    }
    return value.toUpperCase();
  }

}
