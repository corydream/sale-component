import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-editor-form',
  template: `
  <form nz-form [formGroup]="form" (ngSubmit)="submitAnnouncement()">
    <div nz-form-item nz-row>
      <div nz-form-label nz-col>
      </div>
      <div nz-form-control nz-col>
        <bgx-editor #editor formControlName="content"></bgx-editor>
      </div>
    </div>
    <button style="margin-top: 12px;" type="submit" class="ant-btn ant-btn-primary">提交</button>
    <div style="margin-top: 20px;">{{html}}</div>
  </form>`,
  styleUrls: ['editor-demo.component.less'],
})
export class EditorForFormComponent {

  public form: FormGroup;
  public content: AbstractControl;
  public html: any;

  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      'content': ['<p>I am Charles</p>', Validators.compose([Validators.required])],
    });

    this.content = this.form.controls['content'];
  };

  public submitAnnouncement(): void {
    if (this.form.valid) {
      this.html = this.form.value.content;
      // alert('Submit!' + this.form.value.content);
    }
  }
}
