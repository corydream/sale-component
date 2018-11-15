import { Component, OnInit, Input, forwardRef, ViewChild, TemplateRef, ViewContainerRef, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CinputComponent),
  multi: true
};

@Component({
  selector: 'cinput',
  templateUrl: './cinput.component.html',
  styleUrls: ['./cinput.component.less'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CinputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('cinputInput') cinputInput: ElementRef<any>;
  @ViewChild('cinputCheckbox') cinputCheckbox: TemplateRef<any>;
  overlayRef: OverlayRef;


  public _placeholder = '请选择';
  public _inputValue = '';
  public total = 0;
  private _size = 'default';
  allChecked = [];
  indeterminate = [];
  _disabled = false;
  _options = [];
  choosen = [];

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
    value.forEach(item => {
      this.allChecked.push(false);
      this.indeterminate.push(false);
    });
  }

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



  updateAllChecked(index): void {
    this.indeterminate[index] = false;
    if (this.allChecked[index]) {
      this._options[index].option.forEach(item => item.checked = true);
    } else {
      this._options[index].option.forEach(item => item.checked = false);
    }
    this.updateViewFromView();
    this.updateModel();
  }

  updateSingleChecked(index): void {
    if (this._options[index].option.every(item => item.checked === false)) {
      this.allChecked[index] = false;
      this.indeterminate[index] = false;
    } else if (this._options[index].option.every(item => item.checked === true)) {
      this.allChecked[index] = true;
      this.indeterminate[index] = false;
    } else {
      this.indeterminate[index] = true;
    }
    this.updateViewFromView();
    this.updateModel();
  }

  updateModel() {
    const choosen = [];
    this._options.forEach(o => {
      o.option.forEach(item => {

        if (item.checked) choosen.push(item.value);
      });
    });

    this.choosen = choosen;
    // view -> model
    this.onChangeCallback(this.choosen);
  }

  updateViewFromView() {
    const _input = [];
    const result = [];

    this._options.forEach(o => {

      o.option.filter(item => item.checked === true).forEach(item => {
        result.push(item.value);
        _input.push(item.label);
      });
    });

    this._inputValue = _input.join();
    this.total = result.length;
  }

  updateViewFromModel() {
    const _input = [];

    this._options.forEach((o, idx, arr) => {

      const length = o.option.length;
      let counter = 0;

      o.option.forEach(item => {

        if (this.choosen.indexOf(item.value) > -1) {
          item.checked = true;
          _input.push(item.label);
          counter++;
        } else {
          item.checked = false;
        }
      });

      this.allChecked[idx] = length > 0 && counter === length ? true : false;
      this.indeterminate[idx] = length > 0 && counter > 0 && counter < length ? true : false;
    });

    this._inputValue = _input.join();
    this.total = this.choosen.length;
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

  clearAll(index) {
    // if (this._options) {
    //   this._options.forEach(o => {
    //     o.option.forEach(item => item.checked == false);
    //   });
    // }
    // this.choosen = [];
    // this.total = this.choosen.length;
    // this.updateModel();
    // this.updateViewFromView();
        this.indeterminate[index] = false;
        this.allChecked[index] = false;
      this._options[index].option.forEach(item => item.checked = false);
    this.updateViewFromView();
    this.updateModel();

  }

  /**
   * Write a new value to the element.
   */
  public writeValue(value: any): void {
    if (value) {
      // model -> view
      this.choosen = value;
      if (Array.isArray(value)) {
        this.updateViewFromModel();
      }
    } else {
      this.choosen = [];
      this.updateViewFromModel();
    }
  }

  /**
   * Set the function to be called when the control receives a change event.
   *
   */
  public registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  /**
   * Set the function to be called when the control receives a touch event.
   *
   */
  public registerOnTouched(fn: any): void {
  }
}
