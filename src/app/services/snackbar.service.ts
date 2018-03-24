import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackbarService {

  constructor(private snackBar:MatSnackBar) { }

  show(message: string, action:string, duration:number){
    this.snackBar.open(message, action, {
      duration:duration,
      verticalPosition: 'top'
    })
  }
}
