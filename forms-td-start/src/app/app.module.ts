import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routes.module';

import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { HeaderComponent } from './header/header.component';
import { AssignmentReactiveComponent } from './reactive/assignment-reactive/assignment-reactive.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemplateDrivenComponent,
    AssignmentComponent,
    ReactiveComponent,
    AssignmentReactiveComponent,
  ],
  //ReactiveFormModule only for Reactive Forms
  //FormsModule only for Template Driven Forms
  imports: [BrowserModule, FormsModule, AppRoutes, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
