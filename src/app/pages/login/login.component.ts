import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    email: '',
    password: ''
  }

  formSend: boolean = false;
  message = {
    text: '',
    status: ''
  };

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  formSendToggle() { this.formSend = !this.formSend }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe((res: any) => {
        console.log(res);
        this._router.navigate(['/dashboard']);
      },
      (err: any) => {
        console.log(err);
        this.formSend = true;
        this.message.text = err.error.message ? err.error.message : 'Se ha producido un error. Inténtalo de nuevo más tarde.';
        this.message.status = 'danger';
      });

  }

}
