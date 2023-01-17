import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';



@NgModule({
  declarations: [HighlightDirective, UnlessDirective],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, UnlessDirective]
})
export class SharedModule { }
