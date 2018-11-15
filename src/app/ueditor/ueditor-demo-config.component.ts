import { Component } from '@angular/core';

@Component({
  selector: 'app-ueditor-config',
  template:`
    <bgx-ueditor  [(ngModel)]="config_source" [bgxConfig]="config"></bgx-ueditor>
    <div style="border: 1px solid #ddd; border-radius:4px;padding:15px;margin-top: 10px;">
      <blockquote style="padding:0;border-left:0;margin-bottom:0;" [innerHTML]="config_source"></blockquote>
    </div>
  `,
  styles: [`
    .edui-editor {
      width: auto !important;
    }
  `]
})
export class UEditorDemoConfigComponent {
  config_source = '我是测试';
  config: any = {
    toolbars: [['FullScreen', 'Source', 'Undo', 'Redo', 'Bold']],
    autoClearinitialContent: true,
    wordCount: false
  };
}
