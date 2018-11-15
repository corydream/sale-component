import { Component } from '@angular/core';

@Component({
  selector: 'app-editor-demo',
  templateUrl: 'editor-demo.component.html',
  styleUrls: []
})
export class EditorDemoComponent {
  editorDefaultCode = require('!!raw-loader!./editor-demo-default.component.ts');
  editorForFormCode = require('!!raw-loader!./editor-demo-form.component.ts');
  editorCustomCode = require('!!raw-loader!./editor-demo-custom.component.ts');

  _markdownCode = require('!!raw-loader!./readme.md');
  goLink(link: string) {
    window.location.hash = link;
  }
}
