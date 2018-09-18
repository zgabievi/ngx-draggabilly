import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxDraggabillyService {
  //
  action$: BehaviorSubject<{ name: string; args?: any[] }> = new BehaviorSubject(
    null
  );

  //
  disable() {
    this.action$.next({ name: 'disable' });
  }

  //
  enable() {
    this.action$.next({ name: 'enable' });
  }

  //
  setPosition(x, y) {
    this.action$.next({ name: 'setPosition', args: [x, y] });
  }

  //
  destroy() {
    this.action$.next({ name: 'destroy' });
  }
}
