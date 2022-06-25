import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'td',

    children: [
      { path: 'example', component: TemplateDrivenComponent },
      { path: 'assignment', component: AssignmentComponent },
    ],
  },
  {
    path: 'reactive',
    children: [
      {
        path: 'example',
        component: ReactiveComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}
