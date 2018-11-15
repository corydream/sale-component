import {
  forwardRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit, Output, TemplateRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';
import { isNotNil } from '@shared/sale-tree/util/check';
import { InputBoolean } from '@shared/sale-tree/util/convert';
import { SaleFormatBeforeDropEvent, SaleFormatEmitEvent } from '@shared/sale-tree/interface';
import { SaleTreeNode } from '@shared/sale-tree/sale-tree-node';
import { SaleTreeService } from '@shared/sale-tree/sale-tree.service';

@Component({
  selector   : 'sale-tree',
  templateUrl: './sale-tree.component.html',
  providers  : [
    SaleTreeService,
    {
      provide    : NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SaleTreeComponent),
      multi      : true
    }
  ]
})

export class SaleTreeComponent implements OnInit, OnDestroy {
  @Input() @InputBoolean() nzShowIcon = false;
  @Input() @InputBoolean() nzShowLine = false;
  @Input() @InputBoolean() nzCheckStrictly = false;
  @Input() @InputBoolean() nzCheckable = false;
  @Input() @InputBoolean() nzShowExpand = true;
  @Input() @InputBoolean() nzAsyncData = false;
  @Input() @InputBoolean() nzDraggable = false;
  @Input() @InputBoolean() nzMultiple = false;
  @Input() @InputBoolean() nzExpandAll: boolean = false;
  /**
   * @deprecated use
   * nzExpandAll instead
   */
  @Input() @InputBoolean() nzDefaultExpandAll: boolean = false;
  @Input() nzBeforeDrop: (confirm: SaleFormatBeforeDropEvent) => Observable<boolean>;

  @Input()
  // tslint:disable-next-line:no-any
  set nzData(value: any[]) {
    if (Array.isArray(value) && value.length > 0) {
      if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
        // has not been new NzTreeNode
        this.nzNodes = value.map(item => (new SaleTreeNode(item)));
      } else {
        this.nzNodes = value;
      }
      this.nzTreeService.conductOption.isCheckStrictly = this.nzCheckStrictly;
      this.nzTreeService.initTree(this.nzNodes);
    } else {
      if (value !== null) {
        console.warn('ngModel only accepts an array and should be not empty');
      }
    }
  }

  /**
   * @deprecated use
   * nzExpandedKeys instead
   */
  @Input()
  set nzDefaultExpandedKeys(value: string[]) {
    setTimeout(() => {
      this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    });
  }

  /**
   * @deprecated use
   * nzSelectedKeys instead
   */
  @Input()
  set nzDefaultSelectedKeys(value: string[]) {
    setTimeout(() => {
      this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    });
  }

  /**
   * @deprecated use
   * nzCheckedKeys instead
   */
  @Input()
  set nzDefaultCheckedKeys(value: string[]) {
    setTimeout(() => {
      this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    });
  }

  @Input()
  set nzExpandedKeys(value: string[]) {
    setTimeout(() => {
      this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    });
  }

  @Input()
  set nzSelectedKeys(value: string[]) {
    setTimeout(() => {
      this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    });
  }

  @Input()
  set nzCheckedKeys(value: string[]) {
    setTimeout(() => {
      this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    });
  }

  @Input()
  set nzSearchValue(value: string) {
    this._searchValue = value;
    this.nzTreeService.searchExpand(value);
    if (isNotNil(value)) {
      this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
      this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
    }
  }

  get nzSearchValue(): string {
    return this._searchValue;
  }

  // model bind
  @Output() nzExpandedKeysChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() nzSelectedKeysChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() nzCheckedKeysChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Output() nzSearchValueChange: EventEmitter<SaleFormatEmitEvent> = new EventEmitter();
  /**
   * @deprecated use
   * nzSearchValueChange instead
   */
  @Output() nzOnSearchNode: EventEmitter<SaleFormatEmitEvent> = new EventEmitter();

  @Output() nzClick: EventEmitter<SaleFormatEmitEvent> = new EventEmitter();
  @Output() nzDblClick: EventEmitter<SaleFormatEmitEvent> = new EventEmitter();
  @Output() nzContextMenu: EventEmitter<SaleFormatEmitEvent> = new EventEmitter();
  @Output() nzCheckBoxChange: EventEmitter<SaleFormatEmitEvent> = new EventEmitter();
  @Output() nzExpandChange: EventEmitter<SaleFormatEmitEvent> = new EventEmitter();

  @Output() nzOnDragStart: EventEmitter<SaleFormatEmitEvent> = new EventEmitter();
  @Output() nzOnDragEnter: EventEmitter<SaleFormatEmitEvent> = new EventEmitter();
  @Output() nzOnDragOver: EventEmitter<SaleFormatEmitEvent> = new EventEmitter();
  @Output() nzOnDragLeave: EventEmitter<SaleFormatEmitEvent> = new EventEmitter();
  @Output() nzOnDrop: EventEmitter<SaleFormatEmitEvent> = new EventEmitter();
  @Output() nzOnDragEnd: EventEmitter<SaleFormatEmitEvent> = new EventEmitter();

  // tslint:disable-next-line:no-any
  @ContentChild('nzTreeTemplate') nzTreeTemplate: TemplateRef<any>;
  _searchValue = '';
  // tslint:disable-next-line:no-any
  nzDefaultSubject = new Subject();
  nzDefaultSubscription: Subscription;
  nzNodes: SaleTreeNode[] = [];
  prefixCls = 'ant-tree';
  nzTreeClass = {};

  onChange: (value: SaleTreeNode[]) => void = () => null;
  onTouched: () => void = () => null;

  getTreeNodes(): SaleTreeNode[] {
    return this.nzNodes;
  }

  /**
   * public function
   */
  getCheckedNodeList(): SaleTreeNode[] {
    return this.nzTreeService.getCheckedNodeList();
  }

  getSelectedNodeList(): SaleTreeNode[] {
    return this.nzTreeService.getSelectedNodeList();
  }

  getHalfCheckedNodeList(): SaleTreeNode[] {
    return this.nzTreeService.getHalfCheckedNodeList();
  }

  getExpandedNodeList(): SaleTreeNode[] {
    return this.nzTreeService.getExpandedNodeList();
  }

  getMatchedNodeList(): SaleTreeNode[] {
    return this.nzTreeService.getMatchedNodeList();
  }

  setClassMap(): void {
    this.nzTreeClass = {
      [ this.prefixCls ]               : true,
      [ this.prefixCls + '-show-line' ]: this.nzShowLine,
      [ `${this.prefixCls}-icon-hide` ]: !this.nzShowIcon,
      [ 'draggable-tree' ]             : this.nzDraggable
    };
  }

  writeValue(value: SaleTreeNode[]): void {
    if (Array.isArray(value) && value.length > 0) {
      this.nzNodes = value;
      this.nzTreeService.conductOption.isCheckStrictly = this.nzCheckStrictly;
      this.nzTreeService.initTree(this.nzNodes);
    } else {
      if (value !== null) {
        console.warn('ngModel only accepts an array and should be not empty');
      }
    }
  }

  registerOnChange(fn: (_: SaleTreeNode[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  constructor(public nzTreeService: SaleTreeService) {
  }

  ngOnInit(): void {
    this.setClassMap();
    this.nzDefaultSubscription = this.nzDefaultSubject.subscribe((data: { type: string, keys: string[] }) => {
      if (data.keys.length === 0) {
        return;
      }
      switch (data.type) {
        case 'nzExpandedKeys':
          this.nzTreeService.calcExpandedKeys(data.keys, this.nzNodes);
          this.nzExpandedKeysChange.emit(data.keys);
          break;
        case 'nzSelectedKeys':
          this.nzTreeService.calcSelectedKeys(data.keys, this.nzNodes, this.nzMultiple);
          this.nzSelectedKeysChange.emit(data.keys);
          break;
        case 'nzCheckedKeys':
          this.nzTreeService.calcCheckedKeys(data.keys, this.nzNodes, this.nzCheckStrictly);
          this.nzCheckedKeysChange.emit(data.keys);
          break;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.nzDefaultSubscription) {
      this.nzDefaultSubscription.unsubscribe();
      this.nzDefaultSubscription = null;
    }
  }
}
