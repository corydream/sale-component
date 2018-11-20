import {
  Component,
  OnInit,
  Input, forwardRef, ViewChild, TemplateRef, ViewContainerRef, ElementRef, HostListener, Output, EventEmitter
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SaleTooltipComponent),
  multi: true
};

@Component({
  selector: 'sale-tooltip',
  templateUrl: './sale-tooltip.component.html',
  styleUrls: ['./sale-tooltip.component.less'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SaleTooltipComponent implements OnInit {
  @ViewChild('cinputInput') cinputInput: ElementRef<any>;
  @ViewChild('cinputCheckbox') cinputCheckbox: TemplateRef<any>;
  overlayRef: OverlayRef;


  public _placeholder = '请选择';
  public _inputValue = '';
  public total = 0;
  allChecked = false;
  indeterminate = false;
  _disabled = false;
  _options = [];
  choose = [];
  salewidth = '140px';
  @Input()
  set placeholder(value: string) {
    this._placeholder = value;
  }

  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }

  @Input()
  set options(value: any) {
    this._options = value;
  }
  @Input()
  set saleWidth(value: number) {
    this.salewidth = value + 'px';
  }
  @Output() optionsChange = new EventEmitter<any>();
  /**
   * 是否模态框()
   */
  @Input() modal = false;

  @HostListener('document:click', ['$event'])
  onBodyClick(btn): void {
    if (!this._elementRef.nativeElement.contains(btn.target)
      && !this.overlayRef.overlayElement.contains(btn.target)
    ) {
      this.overlayRef.detach();
    }
  }

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private _elementRef: ElementRef,
  ) {
  }

  ngOnInit() {
    const strategy = this.overlay
      .position()
      .flexibleConnectedTo(this.cinputInput)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }]);

    this.overlayRef = this.overlay.create({
      positionStrategy: strategy,
      hasBackdrop: this.modal,
      scrollStrategy: this.modal ? this.overlay.scrollStrategies.block() : null,
    });
  }

  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this._options.forEach(item => item.checked = true);
    } else {
      this._options.forEach(item => item.checked = false);
    }
    this.updateModel();
  }

  updateSingleChecked(): void {
    if (this._options.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this._options.every(item => item.checked === true)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
    this.updateModel();
  }
  updateModel() {
    let choose = [];
    this._inputValue = '';
    choose = this._options.filter(item => item.checked);
    choose.map(v => {
      this._inputValue += v.label + ',';
    });
    this.total = choose.length;
    this._inputValue = this._inputValue.substring(0, this._inputValue.length - 1);
    // view -> model
    this.choose = choose;
    this.optionsChange.emit(choose);
    this.onChangeCallback(choose);
  }

  onChangeCallback = (_: any) => { };

  focus() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    } else {
      this.overlayRef.attach(
        new TemplatePortal(this.cinputCheckbox, this.viewContainerRef));
    }
  }

  clearAll() {
    if (this.choose.length > 0) {
      this.indeterminate = false;
      this.allChecked = false;
      this._options.forEach(item => item.checked = false);
      this.updateModel();
    }
  }

}
