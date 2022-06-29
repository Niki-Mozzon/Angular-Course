import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment-reactive',
  templateUrl: 'assignment-reactive.component.html',
  styleUrls: ['assignment-reactive.component.css'],
})
export class AssignmentReactiveComponent implements OnInit {
  createProject!: FormGroup;
  statuses: string[] = ['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
    this.createProject = new FormGroup({
      projectName: new FormControl(
        null,
        Validators.required,
        this.validatorProjectNameAsync
      ),
      email: new FormControl(null, [Validators.email, Validators.required]),
      status: new FormControl(),
    });
  }

  onCreate() {
    console.log(this.createProject);
  }

  validatorProjectName(
    control: AbstractControl
  ): { [s: string]: boolean } | null {
    return control.value === 'Test' ? { projectNameInvalid: true } : null;
  }
  validatorProjectNameAsync(
    control: AbstractControl
  ): Observable<any> | Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ projectNameInvalid: true });
        }
        resolve(null);
      }, 2000);
    });
    return promise;
  }
}

/*           Create a Form with the following Controls and Validators
          1) Project Name (should not be empty)
          2) Mail (should not be a empty and a valid email)
          3) Project Status Dropdown, with three values: 'Stable', 'Critical', 'Finished'
          4) Submit Button

          Add your own Validator which doesn't allow "Test" as a Project Name

          Also implement that Validator as an async Validator (replace the other one)

          Upon submitting the form, simply print the value to the console */
