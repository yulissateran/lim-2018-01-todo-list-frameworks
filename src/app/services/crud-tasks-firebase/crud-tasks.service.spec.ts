import { TestBed, inject } from '@angular/core/testing';

import { CrudTasksService } from './crud-tasks.service';

describe('CrudTasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudTasksService]
    });
  });

  it('should be created', inject([CrudTasksService], (service: CrudTasksService) => {
    expect(service).toBeTruthy();
  }));
});
