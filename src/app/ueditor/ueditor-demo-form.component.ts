import { Component } from '@angular/core';

@Component({
  selector: 'app-ueditor-form',
  template: `
    <form #mForm="ngForm">
      <bgx-ueditor bgxPath="/assets/ueditor/" [bgxConfig]="config" [(ngModel)]="form_source" required name="form_source"></bgx-ueditor>
      <div style="margin-top: 10px">
        <button type="submit" class="ant-btn ant-btn-primary" [disabled]="!mForm.form.valid || !mForm.form.dirty">保存</button>
      </div>
    </form>
  `,
  styleUrls: ['ueditor-demo.component.less']
})
export class UEditorDemoFormComponent {
  form_source: string;
  config = {
    themePath: '/assets/ueditor/themes/'
  }
}
