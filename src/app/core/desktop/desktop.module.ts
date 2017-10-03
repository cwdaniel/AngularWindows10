import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { DesktopComponent } from './desktop.component';
import { IconsComponent } from './icons/icons.component';

@NgModule({
    declarations: [
        DesktopComponent,
        IconsComponent,
    ],
    imports: [CommonModule],
    exports: [DesktopComponent, IconsComponent],
})
export class DesktopModule { }
