import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  templateUrl: 'assignment.component.html',
  styleUrls: ['assignment.component.css'],
})
export class AssignmentComponent implements OnInit {
  subscriptions?: string[] = ['Basic', 'Advanced', 'Pro'];
  @ViewChild('f')
  form?: NgForm;

  user = { email: '', password: '', subscription: '' };

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.user = {
      email: this.form?.value.email,
      password: form.value.password,
      subscription: form.value.subscription,
    };
    console.log('Email: ' + this.user.email);
  }
}
