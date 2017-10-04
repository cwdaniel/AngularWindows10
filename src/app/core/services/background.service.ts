import { Injectable } from '@angular/core';

@Injectable()
export class BackgroundService {
    public backgroundUrl;
    public backgroundColor;

    constructor() { }

    public getBackground = () => this.backgroundUrl;
    public setBackgroundImage = (newBackground: string) => this.backgroundUrl = newBackground;
    public setBackgroundColor = (newBackgroundColor: string) => this.backgroundColor = newBackgroundColor;
}
