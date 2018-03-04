import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
  private date:Date;
  private today:string;
  constructor() { }

  getDate():string{
    this.date = new Date();
    var day = ("0" + (this.date.getDate())).slice(-2)
    var month = ("0" + (this.date.getMonth() + 1)).slice(-2) //January is 0!
    var year = this.date.getFullYear();
    var hour = ("0" + (this.date.getHours())).slice(-2)
    var minutes = ("0" + (this.date.getMinutes())).slice(-2);
    var seconds = ("0" + (this.date.getSeconds())).slice(-2);

    this.today = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    console.log(this.today);
    return this.today;
  }

  format(date:string):string{ //YYYY-MM-DD hh:mm:ss
    return date.slice(0,9);
  }
}
