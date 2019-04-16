import { TestBed } from '@angular/core/testing';

import { LibraryAlexService } from './library-alex.service';

describe('LibraryAlexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryAlexService = TestBed.get(LibraryAlexService);
    expect(service).toBeTruthy();
  });
});
