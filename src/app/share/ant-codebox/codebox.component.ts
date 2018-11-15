import { Input, Component, OnInit, ViewEncapsulation, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector     : 'demo-code-box',
  encapsulation: ViewEncapsulation.None,
  template     : `
    <section class="code-box" [ngClass]="{'expand':antExpanded}" [attr.id]="bgxId">
      <section class="code-box-demo">
        <div>
          <ng-content select="[demo]"></ng-content>
        </div>
      </section>
      <section class="code-box-meta markdown">
        <div class="code-box-title">
          <a>{{antTitle}}</a>
        </div>
        <ng-content select="[intro]"></ng-content>
        <nz-tooltip [nzTitle]="antExpanded?'收起代码':'展开代码'">
          <img nz-tooltip alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/NBjNKmzFsnATotIWoZmP.svg" class="collapse" (click)="antExpanded=!antExpanded">
        </nz-tooltip>
      </section>
      <section class="highlight-wrapper" [ngClass]="{'highlight-wrapper-expand':antExpanded}">
        <div class="highlight">
          <div class="code-box-actions">
            <nz-tooltip [nzTitle]="'复制代码'">
              <i nz-tooltip class="anticon code-box-code-copy" [class.anticon-copy]="!_copied" [class.anticon-check]="_copied" [class.ant-tooltip-open]="_copied" (click)="copyCode(_code)"></i>
            </nz-tooltip>
          </div>
          <ant-highlight [antCode]="_code" [antLanguage]="'typescript'"></ant-highlight>
        </div>
      </section>
    </section>
  `,
  styleUrls    : [
    './codebox.less'
  ]
})
export class CodeBoxComponent implements OnInit {
  _code: string;
  _copied = false;

  @Input() antTitle: string;
  @Input() antExpanded = false;
  @Input() bgxId: string;
  @Input()
  get antCode(): string {
    return this._code;
  };

  set antCode(value: string) {
    this._code = value;
  }

  copyCode(code) {
    this.copy(code).then(() => {
      this._copied = true;
      setTimeout(() => {
        this._copied = false;
      }, 1000);
    })
  }

  copy(value: string): Promise<string> {

    const promise = new Promise<string>(
      (resolve, reject): void => {
        let copyTextArea = null as HTMLTextAreaElement;
        try {
          copyTextArea = this.dom.createElement('textarea');
          copyTextArea.style.height = '0px';
          copyTextArea.style.opacity = '0';
          copyTextArea.style.width = '0px';
          this.dom.body.appendChild(copyTextArea);
          copyTextArea.value = value;
          copyTextArea.select();
          this.dom.execCommand('copy');
          resolve(value);
        } finally {
          if (copyTextArea && copyTextArea.parentNode) {
            copyTextArea.parentNode.removeChild(copyTextArea);
          }
        }
      }
    );

    return ( promise );

  }

  constructor(@Inject(DOCUMENT) private dom: Document, private _el: ElementRef) {

  }

  ngOnInit() {
  }
}
