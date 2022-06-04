import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToastMessageComponent } from './toast-message/toast-message.component';
import { SearchSectionComponent } from './header/search-section/search-section.component';
import { ToasterComponent } from './toaster.component/toaster.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToastMessageComponent,
    SearchSectionComponent,
    ToasterComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
