import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form: FormGroup;
  requiredName: boolean = false;
  requiredEmail: boolean = false;
  notificationVisible = false;
  notificationMessage = '';
  notificationType = 'neutral';

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern('[a-zA-z-_ ]{2,}'),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      message: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(300),
      ]),
    });

    this.form.valueChanges.subscribe(() => {
      if (this.name.value != '') {
        this.requiredName = false;
      }
      if (this.email.value != '') {
        this.requiredEmail = false;
      }
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      if (this.name.untouched) {
        this.requiredName = true;
      }
      if (this.email.untouched) {
        this.requiredEmail = true;
      }
      return;
    } else {
      this.requiredName = false;
      this.requiredEmail = false;
      setTimeout(() => {
        // always shows error because form is not done yet
        this.notificationType = 'failure';
        this.notificationVisible = true;
        this.notificationMessage = 'Oops... Something went wrong. ';
      }, 1000);
      this.form.reset({
        name: '',
        email: '',
        message: '',
      });
    }
  }

  // form-control getters
  get name() {
    return this.form.get('name') as FormControl;
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get messaeg() {
    return this.form.get('message') as FormControl;
  }

  // notification
  closeNotification() {
    this.notificationVisible = false;
  }
}
