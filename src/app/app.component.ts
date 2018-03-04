import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Administrator app';
  tabId = 1;

  changeTab(id:number){
    this.tabId = id;
  }

  checkSelected(id:number){
    return this.tabId === id;
  }
}
