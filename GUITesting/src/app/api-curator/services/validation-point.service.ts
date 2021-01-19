import {Injectable} from '@angular/core';
import {ValidationCheckTypeService} from './validation-check-type.service';


@Injectable({
  providedIn: 'root'
})
export class ValidationPointService {

  constructor() {
  }

  static callValidations(fileToCheck: File): boolean {
    const testCheck: boolean = ValidationCheckTypeService.checkFileEnding(fileToCheck);
    return (testCheck);
  }
}
