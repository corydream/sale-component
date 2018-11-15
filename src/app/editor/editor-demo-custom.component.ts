import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-custom',
  template: `
    <div id="toolbar">
    <!-- Add a bold button -->
    <button class="ql-bold">加粗</button>
    <button class="ql-italic">斜体</button>
    <!-- Add font size dropdown -->
    <select class="ql-size">
      <option value="small">小</option>
      <!-- Note a missing, thus falsy value, is used to reset to default -->
      <option selected>正常</option>
      <option value="large">大</option>
      <option value="huge">超大</option>
    </select>
    <!-- Add subscript and superscript buttons -->
    <button class="ql-script" value="sub"></button>
    <button class="ql-script" value="super"></button>
    <button style="width: 120px" (click)="customButtonClick()">custom button</button>
  </div>
  <bgx-editor [bgxStyle]="_style" [bgxModules]="modules"
    (bgxOnEditorCreated)="editorCreated($event)"
    (bgxOnContentChanged)="contentChanged($event)"
    (bgxOnSelectionChanged)="selectionChanged($event)"></bgx-editor>
    <div class="ql-editor preview" [innerHTML]="_editorContent"></div>
    `,
  styles: [`
    .quill-editor {
      min-height: 16em;
      max-height: 20em;
      overflow-y: auto;
    }
    .preview {
      min-height: 10em;
      max-height: 16em;
      overflow-y: auto;
      border: 1px solid #eee;
      border-top: none;
    }
  `]
})
export class EditorCustomComponent implements OnInit {

  _editor: any;
  _editorContent = `<h3>I am Example Custom</h3>`;
  _style: any = { 'height': '300px' };
  modules = {
    toolbar: '#toolbar'
  }
  editorCreated(editor) {
    this._editor = editor;
    console.log('编辑器创建成功！当前编辑器实例：', editor);
  }

  contentChanged(editor) {
    console.log('编辑器内容已改变：', editor);
    this._editorContent = editor.html;
  }

  selectionChanged(editor) {
    console.log(editor);
  }
  customButtonClick() {
    alert(`你可以定义一些自定义按钮做你想做的事，如上传图片至第三方存储...等等`)
  }
  ngOnInit(): void {
    setTimeout(() => {
      this._editorContent = '<h1>Example Custom changed!</h1>';
      console.log('你可以利用编辑器实例进行做一些事情', this._editor);
    }, 3000)
  }

}
