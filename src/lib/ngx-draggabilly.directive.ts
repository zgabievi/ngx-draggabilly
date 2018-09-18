import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import Draggabilly from 'draggabilly';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NgxDraggabillyOptions } from './ngx-draggabilly-options';
import { NgxDraggabillyService } from './ngx-draggabilly.service';

@Directive({
  selector: '[draggabilly]'
})
export class NgxDraggabillyDirective implements OnInit, OnDestroy {
  //
  @Output()
  dragStart: EventEmitter<{
    event: Event;
    pointer: MouseEvent | Touch;
  }> = new EventEmitter();

  //
  @Output()
  dragMove: EventEmitter<{
    event: Event;
    pointer: MouseEvent | Touch;
    moveVector: { x: number; y: number };
  }> = new EventEmitter();

  //
  @Output()
  dragEnd: EventEmitter<{
    event: Event;
    pointer: MouseEvent | Touch;
  }> = new EventEmitter();

  //
  @Output()
  pointerDown: EventEmitter<{
    event: Event;
    pointer: MouseEvent | Touch;
  }> = new EventEmitter();

  //
  @Output()
  pointerMove: EventEmitter<{
    event: Event;
    pointer: MouseEvent | Touch;
    moveVector: { x: number; y: number };
  }> = new EventEmitter();

  //
  @Output()
  pointerUp: EventEmitter<{
    event: Event;
    pointer: MouseEvent | Touch;
  }> = new EventEmitter();

  //
  @Output()
  staticClick: EventEmitter<{
    event: Event;
    pointer: MouseEvent | Touch;
  }> = new EventEmitter();

  //
  @Input()
  options: NgxDraggabillyOptions;

  //
  private unsubscribe$: Subject<null> = new Subject();

  //
  private draggie: Draggabilly;

  //
  constructor(
    private el: ElementRef,
    private draggieService: NgxDraggabillyService
  ) {
    this.draggieService.action$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
        if (this.draggie instanceof Draggabilly && params) {
          if (params.args) {
            return this.draggie[params.name](...params.args);
          }

          this.draggie[params.name]();
        }
      });
  }

  //
  ngOnInit() {
    this.draggie = new Draggabilly(this.el.nativeElement, this.options);

    this.draggie.on('dragStart', (event, pointer) =>
      this.dragStart.emit({ event, pointer })
    );
    this.draggie.on('dragMove', (event, pointer, moveVector) =>
      this.dragMove.emit({ event, pointer, moveVector })
    );
    this.draggie.on('dragEnd', (event, pointer) =>
      this.dragEnd.emit({ event, pointer })
    );
    this.draggie.on('pointerDown', (event, pointer) =>
      this.pointerDown.emit({ event, pointer })
    );
    this.draggie.on('pointerMove', (event, pointer, moveVector) =>
      this.pointerMove.emit({ event, pointer, moveVector })
    );
    this.draggie.on('pointerUp', (event, pointer) =>
      this.pointerUp.emit({ event, pointer })
    );
    this.draggie.on('staticClick', (event, pointer) =>
      this.staticClick.emit({ event, pointer })
    );
  }

  //
  ngOnDestroy() {
    this.draggie.off('dragStart', (event, pointer) =>
      this.dragStart.emit({ event, pointer })
    );
    this.draggie.off('dragMove', (event, pointer, moveVector) =>
      this.dragMove.emit({ event, pointer, moveVector })
    );
    this.draggie.off('dragEnd', (event, pointer) =>
      this.dragEnd.emit({ event, pointer })
    );
    this.draggie.off('pointerDown', (event, pointer) =>
      this.pointerDown.emit({ event, pointer })
    );
    this.draggie.off('pointerMove', (event, pointer, moveVector) =>
      this.pointerMove.emit({ event, pointer, moveVector })
    );
    this.draggie.off('pointerUp', (event, pointer) =>
      this.pointerUp.emit({ event, pointer })
    );
    this.draggie.off('staticClick', (event, pointer) =>
      this.staticClick.emit({ event, pointer })
    );

    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    this.draggie.destroy();
  }
}
