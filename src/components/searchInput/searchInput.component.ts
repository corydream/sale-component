import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, forwardRef, ViewChild, TemplateRef, ViewContainerRef, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ChineseToPinyinService } from './chineseToPinyin.service';
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SearchInputComponent),
  multi: true
};

@Component({
  selector: 'search-input',
  templateUrl: './searchInput.component.html',
  styleUrls: ['./searchInput.component.less'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class SearchInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('cinputInput') cinputInput: ElementRef<any>;
  @ViewChild('cinputCheckbox') cinputCheckbox: TemplateRef<any>;
  overlayRef: OverlayRef;


  public _placeholder = '请选择';
  public _inputValue = '';
  public total = 0;
  private _size = 'default';
  allChecked = false;
  indeterminate = false;
  _disabled = false;
  _firtPageDataArray = [];
  choosen = [];
  _url = '';
  _searchOption = [];
  _searchInitOption = [];
  _searchPageOption = [];
  searchCondition = null;
  suffixIcon = 'anticon anticon-search';

  condition = '';
  pageIndex = 1;
  pageSize = 50;
  totalNum = 0;
  _config = {};

  originCount = 0;
  // 选中的
  selectedArray = [];

  @Input()
  set placeholder(value: string) {
    this._placeholder = value;
  }

  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }
  @Input()
  set config(value: any) {
    this._config = value ? value : {};
    this.allChecked = false;
    this.indeterminate = false;
  }
  constructor(
    private overlay: Overlay,
    private httpClient: HttpClient,
    public ctp: ChineseToPinyinService,
    private _elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef) {
  }

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
      hasBackdrop: false,
      // scrollStrategy: this.overlay.scrollStrategies.close()
    });

    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
    });
    // 默认加载
    this.loadListData();
  }

  // 加载数据
  loadListData(): void {
    let paramas = { pageIndex: this.pageIndex, pageSize: 5000 };
    paramas = this.searchCondition ? Object.assign(paramas, { [this._config['condition']]: this.searchCondition }) : paramas;
    let getUrl = this._config['url'].indexOf('?') != -1 ? this._config['url'] + (this.serizeParam({})) : (paramas ? this._config['url'] + '?' + (this.serizeParam(paramas)) : this._config['url']);
    this.httpClient.get(getUrl, { withCredentials: true }).subscribe((res: any) => {
      // this.totalNum = (res['result'] && (res['result']['total'] || res['result']['total_count'])) ? res['result']['total'] : 0;
      if (res['result'] && res['result']['total']) {
        this.totalNum = res['result']['total'];
      } else if (res['result'] && res['result']['total_count']) {
        this.totalNum = res['result']['total_count'];
      } else {
        this.totalNum = res['result'].length;
      }
      this._firtPageDataArray = this._firtPageDataArray.length > 0 ? this._firtPageDataArray : this.serizaLizeMutiple(res, this._config['title'], this._config['label'], this._config['value']);
      this._searchOption = this.serizaLizeMutiple(res, this._config['title'], this._config['label'], this._config['value']);
      this._searchInitOption = this.serizaLizeMutiple(res, this._config['title'], this._config['label'], this._config['value']);
      this.originCount = this.originCount > 0 ? this.originCount : this.totalNum;
      this._searchOption = this.checkedIsChecked(this._searchOption);
      this._searchInitOption = this.checkedIsChecked(this._searchOption);
      this._searchPageOption = this.checkedIsChecked(this._searchOption);
      this._searchOption = [...this._searchPageOption.slice(0, 50)];
    });
  }
  // 搜索
  searchMonitorList(value?): void {
    this.suffixIcon = "anticon anticon-search";
    // this.loadListData();
    this.searchData();
  }
  searchData() {
    if (this.searchCondition) {
      // this.totalNum = this.searchCondition.length;
      this._searchPageOption = [...this._searchInitOption].filter(item => {
        if (item['label'].indexOf(this.searchCondition.toLowerCase()) > -1 ||
          item['spell'].indexOf(this.searchCondition.toLowerCase()) > -1 ||
          item['first'].indexOf(this.searchCondition.toLowerCase()) > -1) {
          return true;
        }
      });
      this.totalNum = this._searchPageOption.length;
      this._searchOption = [...this._searchPageOption.slice(0, 50)];
    }
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
    //
    // this.loadListData();
  }

  //搜索条件变化
  searchChange(): void {
    this._searchOption = this.searchCondition.length > 0 ? this._searchOption : this._firtPageDataArray;
    this.totalNum = this.searchCondition.length > 0 ? this._searchOption.length : this.originCount;
    this.suffixIcon = "anticon anticon-close";
    this.searchMonitorList(this.searchCondition);
  }
  searchFoucs(event): void {
    event.stopPropagation();
    if (this.suffixIcon == "anticon anticon-close") {
      this.searchCondition = '';
    }
    this.suffixIcon = "anticon anticon-close"
  }
  searchBlur(): void {
    if (this.suffixIcon == "anticon anticon-close") {
      this.searchCondition = '';
    }
    this.suffixIcon = "anticon anticon-search";
  }
  // 搜索或者清除条件
  triggerSearchOrClear(isClear?): void {
    if (this.suffixIcon !== "anticon anticon-search") {
      this.searchCondition = '';
    }
    this.searchMonitorList(this.searchCondition);
    this.suffixIcon = "anticon anticon-search";
  }
  // 清空
  clearAll(): void {
    this._inputValue = '';
    this.totalNum = this.originCount;
    this.total = 0;
    this.searchCondition = '';
    this.selectedArray.map(v => v.checked = false);
    this._searchOption = [...this._searchInitOption.slice(0, 50)];
    this.onChangeCallback(null);
  }

  updateSingleChecked(): void {
    let dataArray = this.pageIndex == 1 ? this._searchOption : this._searchOption;
    this.indeterminate = true;
    // 新增
    dataArray.filter(item => item.checked == true).forEach((item) => {
      let temp = this.selectedArray.find(obj => item.value == obj.value);
      !temp ? this.selectedArray.push(item) : null
    });
    // 取消
    dataArray.filter(item => item.checked == false).forEach((obj) => {
      let index = this.selectedArray.findIndex(item => item.value == obj.value && obj.checked == false);
      index != -1 ? this.selectedArray.splice(index, 1) : null;
    })
    this.updateViewFromView();
    this.updateModel();
  }

  updateModel() {
    let choosen = [];
    let checkValues = [];
    let dataArray = this.pageIndex == 1 ? this._searchOption : this._searchOption;
    dataArray = this.checkedIsChecked(dataArray);
    dataArray.filter(item => item.checked === true).forEach(item => {
      if (!this.selectedArray.find(obj => obj.value == item.value)) {
        choosen.push(item.value);
      }
    });
    if (choosen.length == 0) {
      choosen = JSON.parse(JSON.stringify(this.selectedArray));
    }
    checkValues = this.filterSameCheckedItem([], choosen);

    // view -> model
    this.onChangeCallback(checkValues);
  }

  updateViewFromView() {
    let dataArray = this.pageIndex == 1 ? this._searchOption : this._searchOption;
    let _input = [];
    const result = [];
    dataArray = this.checkedIsChecked(dataArray);
    dataArray.filter(item => item.checked === true).forEach(item => {
      if (!this.selectedArray.find(obj => obj.value == item.value)) {
        result.push(item.value);
        _input.push(item.label);
      }
    });
    if (_input.length == 0) {
      this.selectedArray.forEach((item) => {
        result.push(item.value);
        _input.push(item.label);
      })
      this.total = _input.length;
      this._inputValue = _input.reverse().join(',');
    } else {
      this.total = _input.length - 1;
      _input = _input.concat(this._inputValue.split(','));
      this._inputValue = _input.join(',');
    }
  }

  updateViewFromModel() {
    const _input = [];
    let dataArray = this.pageIndex == 1 ? this._searchOption : this._searchOption;
    dataArray.forEach((item, idx, arr) => {

      const length = dataArray.length;
      let counter = 0;
      if (this.choosen.indexOf(item.value) > -1) {
        item.checked = true;
        _input.push(item.label);
        counter++;
      } else {
        item.checked = false;
      }
    });
    // 去重
    this._inputValue = _input.join();
    this.total = this.choosen.length;
  }

  // 是否已经选中
  checkedIsChecked(searchArray = []): any {
    this.selectedArray.forEach((item) => {
      searchArray.forEach((obj) => {
        if (obj.value == item.value) {
          obj.checked = true;
        }
      })
    })
    return searchArray;
  }
  // 去重
  filterSameCheckedItem(originDataArray = [], addDataArray = []): any {
    let newArray = [], newChoosen = [];
    originDataArray.forEach((item) => {
      let index = addDataArray.findIndex(objc => objc.value == item.value);
      index != -1 ? addDataArray.splice(index, 1) : null;
    });
    newArray = originDataArray.concat(addDataArray);

    newArray.forEach((item) => {
      newChoosen.push(item.value)
    })
    return newChoosen;
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
  // 格式化参数
  serizeParam(parames) {
    if (parames) {
      let urlStr = '';
      for (var key of Object.keys(parames)) {
        urlStr += key != undefined ? ('&' + key + '=' + ((parames[key] && typeof parames[key] == 'string') ? parames[key].trim() : parames[key])) : ''
      }
      return urlStr.substring(1);
    }
    return '';
  };

  // 多选数据 格式化
  serizaLizeMutiple(data, title?: string, label?: string, value?: string): any {
    let objc = [];
    let tempArr = [];
    if (data && data['result']) {
      if (data['result']['results']) {
        if (Array.isArray(data['result']['results'])) {
          tempArr = data['result']['results'];
        }
      } else {
        if (Array.isArray(data['result'])) {
          tempArr = data['result'];
        }
      }
    }
    tempArr.forEach((item) => {
      if (item) {
        let obj = {
          label: item[label],
          value: item[value] ? this.ctp.ConvertPinyin({ chinas: item[value] }) : '',
          spell: item[label] ? this.ctp.ConvertPinyin({ chinas: item[label] }) : '',
          first: item[label] ? this.ctp.ConvertPinyin({ chinas: item[label], first: true }) : '',
          checked: false
        };
        objc.push(obj);
      }
    });
    return objc;
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
  @HostListener('document:click', ['$event'])
  onBodyClick(btn): void {
    if (!this._elementRef.nativeElement.contains(btn.target)
      && !this.overlayRef.overlayElement.contains(btn.target)
    ) {
      this.overlayRef.detach();
    }
  }
}
