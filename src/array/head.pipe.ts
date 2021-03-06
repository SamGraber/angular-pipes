import { Pipe, PipeTransform  } from 'angular2/core';
import { isArray } from '../utils/utils';

@Pipe({
    name: 'head',
    pure: false
})
export class HeadPipe implements PipeTransform {
    
    transform (input: any): any {
        
        if (!isArray(input)) {
            return input;
        }
        
        // Will return undefined if length is 0
        return input[0];
    }
}