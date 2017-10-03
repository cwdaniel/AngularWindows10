import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AngularDraggableModule } from 'angular2-draggable';

import { DesktopComponent } from './desktop.component';
import { IconsComponent } from './icons/icons.component';

@NgModule({
    declarations: [
        DesktopComponent,
        IconsComponent,
    ],
    imports: [CommonModule, AngularDraggableModule],
    exports: [DesktopComponent, IconsComponent],
})
export class DesktopModule { }
