import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styleUrls: ['./modal-demo.component.less']
})
export class BgxModalDemoComponent implements OnInit {

  modalBaseCode = require('!!raw-loader!./modal-demo-basic.component.ts');
  modalAsyncCode = require('!!raw-loader!./modal-demo-async.component.ts');
  modalConfirmPromiseCode = require('!!raw-loader!./modal-demo-confirm-promise.component.ts');
  modalConfirmCode = require('!!raw-loader!./modal-demo-confirm.component.ts');
  modalFooterCode = require('!!raw-loader!./modal-demo-footer.component.ts');
  modalInfoCode = require('!!raw-loader!./modal-demo-info.component.ts');
  modalManualCode = require('!!raw-loader!./modal-demo-manual.component.ts');
  modalPositionCode = require('!!raw-loader!./modal-demo-position.component.ts');
  modalSeriveCode = require('!!raw-loader!./modal-demo-service.component.ts');
  modalReconfirmCode = require('!!raw-loader!./modal-demo-reconfirm.component.ts');
  modalMousemoveCode = require('!!raw-loader!./modal-demo-mousemove.component.ts');

  _markdownCode = require('!!raw-loader!./DEMO.md');
  constructor() { }

  ngOnInit() {
  }
  goLink(link: string) {
    window.location.hash = link;
  }
}
