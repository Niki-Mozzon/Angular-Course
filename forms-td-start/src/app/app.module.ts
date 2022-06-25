import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routes.module';

import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { HeaderComponent } from './header/header.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemplateDrivenComponent,
    AssignmentComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutes],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
