import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //#region - Optional{
  @ViewChild('f')
  form?: NgForm;
  //}

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  //2 ways to get the same result
  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.form);
  }
}
