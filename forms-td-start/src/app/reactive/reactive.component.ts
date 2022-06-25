import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: 'reactive.component.html',
  styleUrls: ['reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  genders = ['male', 'female'];

  //The whole form is stored in this variable
  signupForm?: FormGroup;
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('bella'),
      email: new FormControl(null),
      gender: new FormControl('Male'),
    });
  }
}
