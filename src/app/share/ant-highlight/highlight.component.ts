import { Input, Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as HighLight from 'highlight.js';

@Component({
  selector     : 'ant-highlight',
  encapsulation: ViewEncapsulation.None,
  styles: ['./highlight.component.less'],
  template     : `
    <pre [ngClass]="'language-'+antLanguage"><code #code [innerText]="antCode"></code></pre>
  `
})
export class AntHighlightComponent implements OnInit, AfterViewInit {
  _code;
  @ViewChild('code') codeElement: ElementRef;
  @Input() antLanguage: string;

  @Input()
  get antCode() {
    return this._code || '';
  };

  set antCode(value) {
    this._code = value.replace('../../../index.showcase', 'ng-zorro-antd');
  }

  ngAfterViewInit() {
    (<any>HighLight).highlightBlock(this.codeElement.nativeElement);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
