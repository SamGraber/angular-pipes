import { Pipe, PipeTransform  } from 'angular2/core';
import { isObject } from '../utils/utils';


@Pipe({
    name: 'keys',
    pure: false
})
export class KeysPipe implements PipeTransform {
    
    transform (input: any): any {
        
        if (!isObject(input)) {
            return input;
        }
        
        return Object.keys(input);
    }
}