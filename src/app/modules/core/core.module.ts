import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { TestdirectiveComponent } from './components/testdirective/testdirective.component';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TestdirectiveComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
