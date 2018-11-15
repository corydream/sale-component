import { Input, Component, OnInit, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';

import * as marked from 'marked';
import * as HighLight from 'highlight.js';

@Component({
  selector     : 'ant-markdown',
  encapsulation: ViewEncapsulation.None,
  styles: ['./markdown.less'],
  template     : `
    <article class="markdown" [innerHTML]="_parsedHTML"></article>
  `
})
export class MarkdownComponent implements OnInit, AfterViewInit {
  _parsedHTML = '';
  _el: HTMLElement;

  @Input()
  set antContent(value) {
    this._parsedHTML = marked(value);
  }


  constructor(private _elementRef: ElementRef) {
    this._el = this._elementRef.nativeElement;
  }

  ngAfterViewInit() {
    const pres = this._el.querySelectorAll('pre');
    for (let m = 0; m < pres.length; m++) {
      const codes = pres[ m ].querySelectorAll('code');
      for (let n = 0; n < codes.length; n++) {
        (<any>HighLight).highlightBlock(codes[ n ]);
      }
    }
  }

  ngOnInit() {
  }
}
