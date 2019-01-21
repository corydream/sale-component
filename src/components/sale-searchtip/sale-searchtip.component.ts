
import {
  Component,
  Input,
  EventEmitter,
  forwardRef, ViewChild, TemplateRef, ViewContainerRef, ElementRef, HostListener, OnInit, Output
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ChineseToPinyinService } from './chineseToPinyin.service';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
export function toBoolean(value: boolean | string): boolean {
  return coerceBooleanProperty(value);
}
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SaleSearchtipComponent),
  multi: true
};
// sale-searchtip
@Component({
  selector: 'sale-searchtip',
  templateUrl: './sale-searchtip.component.html',
  styleUrls: ['./sale-searchtip.component.less'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SaleSearchtipComponent implements ControlValueAccessor, OnInit {
  @ViewChild('cinputInput') cinputInput: ElementRef<any>;
  @ViewChild('cinputCheckbox') cinputCheckbox: TemplateRef<any>;
  @Output() optionsChange = new EventEmitter<any>();
  overlayRef: OverlayRef;


  public _placeholder = '请选择';
  _disabled = false;
  salewidth = '140px';
  allow_clear = false;
  _searchOption = [];
  _searchInitOption = [];
  _searchPageOption = [];
  _searchOriginOption = [];
  searchCondition = null;
  selectedArr = [];
  choose = [];
  pageIndex = 1;
  pageSize = 50;
  totalNum = 0;
  total = 0;
  listArr = [];
  async = true;
  onChange: (value: string | string[]) => void = () => null;
  onTouched: () => void = () => null;
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
    this.async = toBoolean(value);
  }

  @Input()
  set options(value: any) {
    this._searchInitOption = value;
    if (this.async) {
      this.loadListData();
    }
  }
  @Input()
  set saleWidth(value: number) {
    this.salewidth = value + 'px';
  }
  constructor(
    private overlay: Overlay,
    public ctp: ChineseToPinyinService,
    private _elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef) {
  }
  // @HostListener('document:click', ['$event'])
  // onBodyClick(btn): void {
  //   const path = btn.path || (btn.composedPath && btn.composedPath());
  //   if (
  //     !path.includes(this.overlayRef.overlayElement)
  //     && !this._elementRef.nativeElement.contains(btn.target)
  //   ) {
  //     this.overlayRef.detach();
  //   }
  // }
  ngOnInit() {
    const strategy = this.overlay
      .position()
      .connectedTo(
        this.cinputInput,
        {
          originX: 'start',
          originY: 'bottom'
        },
        {
          overlayX: 'start',
          overlayY: 'top'
        });

    this.overlayRef = this.overlay.create({
      positionStrategy: strategy,
      hasBackdrop: false
    });

    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
    });
  }
  // 加载数据
  loadListData(): void {
    this._searchInitOption.map(v => v.label = v.value);
    this._searchPageOption = JSON.parse(JSON.stringify(this._searchInitOption));
    this._searchPageOption = this.serizaLizeMutiple(this._searchPageOption);
    this._searchOriginOption = [...this._searchPageOption];
    this.totalNum = this._searchInitOption.length;
    this._searchOption = [...this._searchPageOption.slice(0, 50)];
    const arrs = this._searchInitOption.filter(v => {
      return this.listArr.includes(v.key);
    });
    arrs.map(v => v.checked = true);
    this.choose = arrs;
    this.selectedArr = arrs.map(v => v.label);
    this.total = this.selectedArr.length || 0;
  }
  searchData() {
    const arr = this.choose.map(v => v.key);
    this._searchPageOption.map(v => {
      v.checked = false;
      if (arr.includes(v.key)) {
        v.checked = true;
      }
    });
    this._searchPageOption = [...this._searchOriginOption].filter(item => {
      if (item['label'].indexOf(this.searchCondition.toLowerCase()) > -1 ||
        item['spell'].indexOf(this.searchCondition.toLowerCase()) > -1 ||
        item['first'].indexOf(this.searchCondition.toLowerCase()) > -1) {
        return true;
      }
    });
    this.totalNum = this._searchPageOption.length;
    this._searchOption = [...this._searchPageOption.slice(0, 50)];
    return {
      total: this.totalNum,
      result: this._searchOption
    };
  }
  // 頁碼
  pageIndexChange(index): void {
    this.pageIndex = index;
    const totalPage = Math.ceil(this.totalNum / 50);
    if (index === 1) {
      this._searchOption = [...this._searchPageOption.slice(0, 50)];
    } else if (index === totalPage) {
      this._searchOption = [...this._searchPageOption.slice(50 * (index - 1), this.totalNum + 1)];
    } else {
      this._searchOption = [...this._searchPageOption.slice(50 * (index - 1), 50 * index + 1)];
    }
  }

  // 搜索条件变化
  searchChange(): void {
    const obj = this.searchData();
    this._searchOption = obj.result;
    this.totalNum = obj.total;
  }
  // 清空
  clearAll(): void {
    if (!this._disabled) {
      this.searchCondition = '';
      this.selectedArr = [];
      this.choose = [];
      this.total = 0;
      this._searchPageOption.map(v => v.checked = false);
      this._searchOriginOption.map(v => v.checked = false);
      this.pageIndex = 1;
      this.searchChange();
    }
  }

  updateSingleChecked(): void {
    this.updateModel();
  }

  updateModel() {
    const choose = this._searchPageOption.filter(v => v.checked);
    this.selectedArr = choose.map(v => v.label);
    this.total = this.selectedArr.length || 0;
    this.onChange(choose);
    this.optionsChange.emit(choose);
    this.choose = choose;
  }

  focus() {

    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    } else {
      this.overlayRef.attach(
        new TemplatePortal(this.cinputCheckbox, this.viewContainerRef));
    }
  }
  // 多选数据 格式化
  serizaLizeMutiple(data: Array<any>): any {
    data.map((item) => {
      if (item) {
        item.label = item.label,
          item.value = item.value ? this.ctp.ConvertPinyin({ chinas: item.value }) : '',
          item.spell = item.label ? this.ctp.ConvertPinyin({ chinas: item.label }) : '',
          item.first = item.label ? this.ctp.ConvertPinyin({ chinas: item.label, first: true }) : '',
          item.checked = false;
      }
    });
    return data;
  }

  /**
   * Write a new value to the element.
   */
  writeValue(value: any | any[]): void {
    if (value) {
      this.listArr = value;
      if (!this.async) {
        this.loadListData();
      }
    }
  }

  /**
   * Set the function to be called when the control receives a change event.
   *
   */
  registerOnChange(fn: (value: string | string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

}
