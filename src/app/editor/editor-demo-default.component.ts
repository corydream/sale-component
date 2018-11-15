import { Component } from '@angular/core';

@Component({
  selector: 'app-editor-default',
  template: `
  <bgx-editor [bgxStyle]="_style" (bgxOnEditorCreated)="editorCreated($event)"></bgx-editor>
  `,
  styleUrls: []
})
export class EditorDefaultComponent {
  _style: any = { 'height': '300px' };
  editorCreated(quill) {
    console.log(quill);
  }
}
