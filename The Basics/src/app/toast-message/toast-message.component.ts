import { Component, OnInit } from '@angular/core';
import { Status } from 'src/utils/status';

@Component({
  selector: 'toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.css'],
})
export class ToastMessageComponent implements OnInit {
  constructor() {}
  status: string = Status.DANGER;
  message: string = 'Action completed successfully';

  ngOnInit(): void {
    const toast = document.getElementById('toast');
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        toast.remove();
      }, 222000);
    }, 2000);
  }

  closeToast() {
    const toast = document.getElementById('toast');
    toast.remove();
  }

  generateId() {
    return Math.floor(Math.random() * (9999 - 0 + 1) + 0);
  }
}
