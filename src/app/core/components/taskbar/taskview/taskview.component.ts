import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'taskbar-taskview',
    templateUrl: './taskview.component.html',
    styleUrls: ['./taskview.component.css']
})
export class TaskviewComponent implements OnInit {
    public isTaskViewActive = false;
    constructor() { }

    ngOnInit() {
    }
    
    public taskViewLeave = () => this.isTaskViewActive = false;
    public taskViewEnter = () => this.isTaskViewActive = true;
    public getTaskViewFont = () => this.isTaskViewActive ? '&#xEB91;' : '&#xE7C4;';
}
