import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestdirectiveComponent } from './components/testdirective/testdirective.component';

const routes: Routes = [
  {
    path: '',
    component: TestdirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
