import {
  Component,
  OnInit,
  Input, forwardRef, ViewChild, TemplateRef, ViewContainerRef, ElementRef, HostListener, Output, EventEmitter
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
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
export class SaleTooltipComponent implements ControlValueAccessor, OnInit {
  @ViewChild('cinputInput') cinputInput: ElementRef<any>;
  @ViewChild('cinputCheckbox') cinputCheckbox: TemplateRef<any>;
  @Output() optionsChange = new EventEmitter<any>();
  @Output() radioSelected = new EventEmitter<any>();
  overlayRef: OverlayRef;

  public _placeholder = '请选择';
  public total = 0;
  allChecked = false;
  indeterminate = false;
  _disabled = false;
  _isChoose = false;
  _options = [];
  choose = [];
  modal = false;
  selectedArr = [];
  salewidth = '140px';
  radioValue = '1';
  listArr = [];
  async = true;
  onChange: (value: string | string[]) => void = () => null;
  onTouched: () => void = () => null;

  @Input()
  set radio(value: boolean) {
    this._isChoose = this.toBoolean(value);
  }
  @Input()
  set placeholder(value: string) {
    this._placeholder = value;
  }

  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }

  @Input()
  set isAsync(value: boolean) {
    this.async = value;
  }
  @Input()
  set options(value: any) {
    if (value) {
      this._options = value;
      if (this.async) {
        this.loadData();
      }
    }

  }
  @Input()
  set saleWidth(value: number) {
    this.salewidth = value + 'px';
  }


  @HostListener('document:click', ['$event'])
  onBodyClick(btn): void {
    const path = btn.path || (btn.composedPath && btn.composedPath());
    if (
      !path.includes(this.overlayRef.overlayElement)
      && !this._elementRef.nativeElement.contains(btn.target)
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
  toBoolean(value: boolean | string): boolean {
    return coerceBooleanProperty(value);
  }
  loadData() {
    this._options.map(v => v.label = v.value);
    const arr = this._options.filter(v => {
      return this.listArr.includes(v.key);
    });
    arr.map(v => v.checked = true);
    this.selectedArr = arr.map(v => v.value);
    this.choose = arr;
    this.total = this.listArr.length;
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
    this.selectedArr = [];
    choose = this._options.filter(item => item.checked);
    this.total = choose.length;
    // view -> model
    this.choose = choose;
    this.optionsChange.emit(choose);
    this.onChangeCallback(choose);
    this.selectedArr = this.choose.map(v => v.value);
    this.onChange(this.choose);
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
    if (this.choose.length > 0 && !this._disabled) {
      this.indeterminate = false;
      this.allChecked = false;
      this._options.forEach(item => item.checked = false);
      this.updateModel();
    }
  }
  radioAction() {
    this.radioSelected.emit(this.radioValue);
  }

  writeValue(value: any | any[]): void {
    if (value) {
      this.listArr = value;
      if (!this.async) {
        this.loadData();
      }
    }
  }

  registerOnChange(fn: (value: string | string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
