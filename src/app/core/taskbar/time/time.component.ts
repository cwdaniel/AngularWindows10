import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'taskbar-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  public currentTime;
  constructor() { }

  ngOnInit() {
  }
  public time = () => {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
    return this.currentTime;
    
  }
}
