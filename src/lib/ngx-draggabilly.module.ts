import { NgModule } from '@angular/core';
import { NgxDraggabillyDirective } from './ngx-draggabilly.directive';
import { NgxDraggabillyService } from './ngx-draggabilly.service';

@NgModule({
  declarations: [NgxDraggabillyDirective],
  providers: [NgxDraggabillyService],
  exports: [NgxDraggabillyDirective]
})
export class NgxDraggabillyModule {}
