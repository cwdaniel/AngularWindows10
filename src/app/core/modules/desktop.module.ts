import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AngularDraggableModule } from 'angular2-draggable';

import { DesktopComponent } from '../components/desktop/desktop.component';
import { IconsComponent } from '../components/desktop/icons/icons.component';

@NgModule({
    declarations: [
        DesktopComponent,
        IconsComponent,
    ],
    imports: [CommonModule, AngularDraggableModule],
    exports: [DesktopComponent, IconsComponent],
})
export class DesktopModule { }
