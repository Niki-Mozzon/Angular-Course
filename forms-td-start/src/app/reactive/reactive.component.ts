import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: 'reactive.component.html',
  styleUrls: ['reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  genders = ['Male', 'Female'];

  //The whole form is stored in this variable
  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('bella'),
      email: new FormControl(null),
      gender: new FormControl('Male'),
    });
  }

  onSubmit() {
    //accessing the form
    //We don't need to retrive the form because it doesn't follow the building principle of Angular, instead, we create it and configure directly from the class .ts so it is already updated
    console.log(this.signupForm);
  }
}
