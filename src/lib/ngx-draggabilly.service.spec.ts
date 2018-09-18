import { TestBed, inject } from '@angular/core/testing';

import { NgxDraggabillyService } from './ngx-draggabilly.service';

describe('NgxDraggabillyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxDraggabillyService]
    });
  });

  it('should be created', inject([NgxDraggabillyService], (service: NgxDraggabillyService) => {
    expect(service).toBeTruthy();
  }));
});
