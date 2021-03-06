import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray, sum } from '../utils/utils';


@Pipe({
    name: 'sum',
    pure: false
})
export class SumPipe implements PipeTransform {
    
    transform (input: any): any {
        
        return !isArray(input) ? input : sum(input);
    }
}