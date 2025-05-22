import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  success = '';

  constructor(private loginService: LoginService) {}

  onSubmit() {
    this.loginService.login(this.email, this.password).subscribe({
      next: (res) => {
        if (res.success) {
          this.success = 'Login successful!';
          this.error = '';
        } else {
          this.error = res.message || 'Login failed';
          this.success = '';
        }
      },
      error: () => {
        this.error = 'Error connecting to API';
        this.success = '';
      }
    });
  }
}
