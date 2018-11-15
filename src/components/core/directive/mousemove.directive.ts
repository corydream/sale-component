import { DOCUMENT } from '@angular/common';
import {
  Directive,
  Inject,
  ElementRef,
  Optional,
  HostListener,
  Renderer2,
  Input,
  OnInit
} from '@angular/core';
import { fromEvent, Subscription, of } from 'rxjs';
import { distinctUntilChanged, debounceTime, switchAll, switchMap } from 'rxjs/operators';

@Directive({
  selector: '[bgxMouseMove]',
})
export class MouseMoveDirective implements OnInit {

  x: number; // 鼠标 当前X坐标
  y: number; // 鼠标 当前Y坐标
  mousemove: Subscription;
  _cannotMove: boolean
  @Input('bgxMouseMove') set cannotMove(value: boolean) {
    if (value) {
      this._cannotMove = value;
    }
  }

  @Input() bgxDisableMouseMove = false; // 窗口最大化时禁止鼠标移动
  @Input() bgxOverClient = true; // 是否允许超出视图区域，默认允许

  constructor(
    @Optional() @Inject(DOCUMENT) private document: any,
    @Optional() private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mousedown', ['$event'])
  onMouseDown($event: any): void {
    // this.renderer.removeStyle(this.el.nativeElement, 'transition');
    $event.preventDefault();
    $event.stopPropagation();
    if (!this._cannotMove) {
      return;
    }
    if (this.bgxDisableMouseMove) {
      return;
    }
    let startX: any, startY: any;
    startX = $event.clientX;
    startY = $event.clientY;
    // 当前坐标等于mousedown坐标时不做处理
    if (this.x === startX && this.y === startY) {
      return;
    }
    const doc = document.body;
    let startPosition: any;
    // 目前只针对Modal进行拖动设置，后期将开放出来，用于拖动任意元素
    const layer = this.el.nativeElement.parentNode.parentNode;
    let style = layer.style;
    let hasMoved = false;
    this.x = $event.clientX;
    this.y = $event.clientY;
    startPosition = layer.getBoundingClientRect();
    if (!hasMoved) {
      hasMoved = true;
      this.renderer.addClass(this.el.nativeElement, 'moved');
    }
    // map(<MouseEvent>(e): any => ({
    //   x: e.clientX,
    //   y: e.clientY
    // }), switchAll())
    this.mousemove = fromEvent(doc, 'mousemove')
      .pipe(debounceTime(10), distinctUntilChanged(), switchMap((e: MouseEvent) => of(e)))
      .subscribe(data => {
        const currTop = startPosition.top + data.y - startY - layer.offsetTop;
        const currLeft = startPosition.left + data.x - startX - layer.offsetLeft;
        // 是否允许超出视图区域
        if (!this.bgxOverClient) {
          let moveTop = currTop <= -layer.offsetTop ? -layer.offsetTop : currTop;
          let moveLeft = currLeft <= -layer.offsetLeft ? -layer.offsetLeft : currLeft;
          if (currLeft >= layer.offsetLeft) {
            moveLeft = layer.offsetLeft;
          }
          style['transform'] = `translate3d(${moveLeft}px,${moveTop}px, 0)`;
        } else {
          // style['transform'] = `translate3d(${currLeft > 0 ? currLeft - 5 : currLeft + 5}px,${currTop}px, 0)`;
          style['transform'] = `translate3d(${currLeft}px,${currTop}px, 0)`;
        }
    });
    this.cancelAllEvent();
  }

  private cancelAllEvent(): void {
    const doc = document.body;
    doc.onmouseup = () => {
      this.mousemove.unsubscribe();
      doc.onmouseup = null;
    };
    doc.onmouseleave = () => {
      this.mousemove.unsubscribe();
      doc.onmouseleave = null;
    };
  }

  ngOnInit(): void {
    if (this._cannotMove) {
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'move');
    }
  }
}
