import { TestBed, inject } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material';

import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {

  
  beforeEach(() => {
    let matSnackSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    TestBed.configureTestingModule({
      providers: [
        SnackbarService,
        { provide: MatSnackBar, useValue: matSnackSpy } 
      ]
    });

  });

  it('should be created', inject([SnackbarService], (service: SnackbarService) => {
    expect(service).toBeTruthy();
  }));

  it('should show', inject([SnackbarService], (service: SnackbarService) => {
    var matSnackSpy = TestBed.get(MatSnackBar);
    service.show("message", "action", 5);
    expect(matSnackSpy.open).toHaveBeenCalled();
  }));

});
