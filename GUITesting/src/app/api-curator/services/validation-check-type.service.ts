import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationCheckTypeService {

  constructor() {
  }

  static checkFileEnding(fileToCheck: File): boolean {
    const extension = fileToCheck.name.split('.').pop();
    return (extension === 'json' || extension === 'yaml');
  }
}
