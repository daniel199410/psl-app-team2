import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
  private date:Date;
  private today:string;
  constructor() { }

  getDate():string{
   this.date = new Date();
   var day = this.date.getDate();
   var month = this.date.getMonth() + 1;
   var year = this.date.getFullYear();
   var hour = this.date.getHours();
   var minutes = this.date.getMinutes();
   var seconds = this.date.getSeconds();

    this.today = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    return this.today;
  }

  format(date:string):string{ //YYYY-MM-DD hh:mm:ss
    return date.slice(0,9);
  }
}
