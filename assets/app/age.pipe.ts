import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'dateToAge'})
export class DateToAgePipe implements PipeTransform {
    transform(value: Date): string {
        let age = moment().diff(moment(value), 'years');
        return  age < 1? age + ' meses': age + ' años';
    }
}