import {Component, OnInit} from '@angular/core';
import {ValidationPointService} from '../../services/validation-point.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {
  fileToCheck: File = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  public handleFileInput(eventTarget: EventTarget): void {
    const eventAsInputTarget = eventTarget as HTMLInputElement;
    const files: FileList = eventAsInputTarget.files;
    this.fileToCheck = files.item(0);
  }

  public checkFile(): void {
    console.log('check file is ' + ValidationPointService.callValidations(this.fileToCheck));
  }

}
