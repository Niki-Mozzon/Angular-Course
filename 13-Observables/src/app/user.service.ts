import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  //Create Observables  ---> Create Observers (AppComponent.ts)  ---> Subscribe observers (AppComponent.ts)  ---> Trigger observers UserComponent.ts
  activatedEmitter = new EventEmitter<boolean>();
  activatedSubject = new Subject<boolean>();
}
