import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'taskbar-startmenu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})
export class StartMenuComponent implements OnInit {
  public showMenu = false;
  constructor() { }

  ngOnInit() {
  }
  public getToggleStatus = () => this.showMenu;
  public startMenu = () => this.showMenu = !this.showMenu;

}
