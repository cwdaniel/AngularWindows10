import { WindowComponent } from '../components/window/window.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
    declarations: [WindowComponent],
    imports: [CommonModule, ResizableModule, AngularDraggableModule],
    exports: [WindowComponent],
})
export class WindowModule {
}
