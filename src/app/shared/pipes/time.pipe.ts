import {Pipe,PipeTransform} from '@angular/core'

@Pipe({name: 'timePipe'})
export class TimePipe implements PipeTransform {
    transform(value:number): string {
        const minutes:number = Math.floor(value/60000);
        const seconds:number = Math.floor((value%60000)/1000)
        return `${minutes} m : ${seconds} s`
    }
}