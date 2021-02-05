import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  singupUserData = {
    email: '',
    name: '',
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

  singupUser() {
    this._auth.registerUser(this.singupUserData)
      .subscribe((res: any) => {
        console.log(res);
        this.formSend = true;
        this.message.text = `${res.name}: Tu usuario se ha registrado correctamente. Te hemos enviado un correo a ${res.email} para verificar tu email.`;
        this.message.status = 'success';
        //this._router.navigate(['/home']);
      }, ((err: any) => {
        console.log(err);
        this.formSend = true;
        this.message.text = err.error.message ? err.error.message : 'Se ha producido un error. Inténtalo de nuevo más tarde.';
        this.message.status = 'danger';
      }));
  }

}
