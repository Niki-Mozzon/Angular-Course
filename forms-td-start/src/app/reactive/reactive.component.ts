import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: 'reactive.component.html',
  styleUrls: ['reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  genders = ['Male', 'Female'];
  forbiddenUsernames: string[] = ['Chris', 'Anna'];

  //The whole form is stored in this variable
  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      //nesting a formGroup inside another formGroup
      userCredentials: new FormGroup({
        username: new FormControl(
          'bella',
          [
            Validators.required,
            this.usernameValidator.bind(this), //here we add our own validator, we add .bind(this), because since we pass it as reference it will take the reference of the angular object that will execute it!
          ],
          this.usernameValidatorAsync
        ), //Despite they are methods you don't use brakets because you don't need to execute instead you just have to pass it as reference
        password: new FormControl('****', Validators.minLength(3)),
      }),
      email: new FormControl('null@test.rt', [
        Validators.required,
        Validators.email,
      ]),
      gender: new FormControl('Male'),
      hobbies: new FormArray([]),
    });
  }

  onSubmit() {
    //accessing the form
    //We don't need to retrive the form because it doesn't follow the building principle of Angular, instead, we create it and configure directly from the class .ts so it is already updated
    console.log(this.signupForm);
  }

  getArrayControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
    ]); //I create the control I wanna add (I can specify the validators as well)
    (<FormArray>this.signupForm.get('hobbies')).push(control); // I push  the FormControl inside the hobbies FormArray
  }

  //with this method we create our own validator, specifically we check if a control contains a value we forbade
  //it must return this object
  usernameValidator(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUsernames.includes(control.value)) {
      //it must return the object to true if has to be forbidden
      return { nameIsForbidden: true };
    }
    //it must return null if it's ok
    return null;
  }

  usernameValidatorAsync(
    control: AbstractControl
  ): Observable<any> | Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'ciao') {
          resolve({ nameIsForbidden: true });
        }
        resolve(null);
      }, 5000);
    });
    return promise;
  }
}
