import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: 'template-driven.component.html',
  styleUrls: ['template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {
  ngOnInit(): void {}
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

  //overrites just specific fields  BEST!
  suggestUserName() {
    this.form?.form.patchValue({ userData: { username: 'superciaone' } });
  }

  //2 ways to get the same result
  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.form);
    //use datas from form!
    console.log(this.form?.value.userData.username);
    //reset removes all fields and restores the touched status to false
    //this.form?.form.reset();
    //this resetes not only resets the fields but add some default values to it
    this.form?.form.reset({ gender: 'Female' });
  }
}
