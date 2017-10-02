import { WindowComponent } from './window.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';

@NgModule({
    declarations: [WindowComponent],
    imports: [CommonModule, ResizableModule],
    exports: [WindowComponent],
})
export class WindowModule {
    public peek = true;
}
