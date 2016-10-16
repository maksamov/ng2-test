/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CodeapiService } from './codeapi.service';

describe('Service: Codeapi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeapiService]
    });
  });

  it('should ...', inject([CodeapiService], (service: CodeapiService) => {
    expect(service).toBeTruthy();
  }));
});
