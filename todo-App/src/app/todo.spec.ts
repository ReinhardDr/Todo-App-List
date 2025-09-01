import { TestBed } from '@angular/core/testing';

import { todoservices } from './todo';

describe('Todo', () => {
  let service: Todo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(todoservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
