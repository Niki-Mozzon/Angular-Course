import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
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
      //nesting a formGroup inside another formGroup
      userCredentials: new FormGroup({
        username: new FormControl('bella', Validators.required), //Despite they are methods you don't use brakets because you don't need to execute instead you just have to pass it as reference
        password: new FormControl('****', Validators.minLength(3)),
      }),
      email: new FormControl('null@test.rt', [
        Validators.required,
        Validators.email,
      ]),
      gender: new FormControl('Male'),
    });
  }

  onSubmit() {
    //accessing the form
    //We don't need to retrive the form because it doesn't follow the building principle of Angular, instead, we create it and configure directly from the class .ts so it is already updated
    console.log(this.signupForm);
  }
}
