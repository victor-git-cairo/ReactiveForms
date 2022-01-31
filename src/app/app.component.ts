import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RFormApp';
  genders = ['male', 'female'];
  signUpForm!: FormGroup;

  // https://mailtrap.io/blog/angular-email-validation/
  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'gender': new FormControl('male')
    })
  }

  onSubmit() {
    console.log(this.signUpForm);
  }
}
