import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DateTimeService {

   private dateTime: Observable<Date>;
   constructor() {
      this.dateTime = Observable.interval(1000).map(tick => new Date()).share();
   }

   getClock(): Observable<Date> {
      return this.dateTime;
   }
}
