import { Component, OnInit } from '@angular/core';
import { DateTimeService } from '../../../services/datetime.service';

@Component({
   selector: 'taskbar-time',
   templateUrl: './time.component.html',
   styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
   public currentTime;

   constructor(private _dateTimeService: DateTimeService) { }

   ngOnInit() {
      this._dateTimeService.getClock().subscribe(time => this.currentTime = time);

   }

}
