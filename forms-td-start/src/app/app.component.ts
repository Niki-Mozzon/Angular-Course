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
  answerQuestion: string = 'Placeholder';
  genders: string[] = ['Male', 'Female'];
  userName?: string;

  /* //One way to set all the fields at once, if there where some fields already edited the changes will be lost!
   suggestUserName() {
     this.form?.setValue({
       userData: { username: 'superuser', email: 'awd@awd.ta' },
       secret: 'pet',
       questionAnswer: 'ciao',
       gender: 'Male',
      });
    } 
    */

  //overrites just specific fields
  suggestUserName() {
    this.form?.form.patchValue({ userData: { username: 'superciaone' } });
  }

  //2 ways to get the same result
  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.form);
  }
}
