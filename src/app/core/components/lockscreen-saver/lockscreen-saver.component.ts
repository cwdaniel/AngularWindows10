import { Component, OnInit } from '@angular/core';
import { BingBackgroundService } from '../../services/bingBackground.service';
import { Response } from '@angular/http';
import { DateTimeService } from '../../services/datetime.service';
@Component({
   selector: 'app-lockscreen-saver',
   templateUrl: './lockscreen-saver.component.html',
   styleUrls: ['./lockscreen-saver.component.css']
})
export class LockscreenSaverComponent implements OnInit {
   public screensaverClicked = false;
   public bg;
   public style;
   public currentTime;

   constructor(private bingBackgroundService: BingBackgroundService, private _dateTimeService: DateTimeService) { }

   ngOnInit() {
      this._dateTimeService.getClock().subscribe(time => this.currentTime = time);

      this.bingBackgroundService.getBackground()
         .subscribe(
         (response: any) => {
            this.bg = 'http://www.bing.com' + response.Paths[0];

            console.log(this.bg);
         },
         (error) => console.log(error)
         );
   }
   public animateLogin = () => {
      this.screensaverClicked = !this.screensaverClicked;
   }
   public getStyle = () => {
      if (this.bg) {
         this.style = {
            'background-size': 'cover',
            'background-image': 'url(' + this.bg + ')'
         };
      }
      return this.style;
   }
}
