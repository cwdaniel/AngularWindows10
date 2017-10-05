import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
   selector: 'taskbar-tray',
   templateUrl: './tray.component.html',
   styleUrls: ['./tray.component.css']
})
export class TrayComponent implements OnInit {
   public trayX;
   public trayY;
   public left = 0;
   public trayClicked = false;
   constructor(private elmRef: ElementRef) { }

   ngOnInit() {
   }

   public trayClick = (ref: ElementRef) => {

   }
   public getStyle = () => {

   }
}
