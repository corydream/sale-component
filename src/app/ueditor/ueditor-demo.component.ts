import { Component } from '@angular/core';

@Component({
  selector: 'app-ueditor-demo',
  templateUrl: './ueditor-demo.component.html',
})
export class UEditorDemoComponent{

  uEditorDefaultCode = require('!!raw-loader!./ueditor-demo-default.component.ts');
  uEditorConfigCode = require('!!raw-loader!./ueditor-demo-config.component.ts');
  uEditorFormCode = require('!!raw-loader!./ueditor-demo-form.component.ts');

  _markdownCode = require('!!raw-loader!./DEMO.md');
  goLink(link: string) {
    window.location.hash = link;
  }
}
