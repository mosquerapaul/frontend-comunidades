import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  singupUserData = {
    name: '',
    email: '',
    password: ''
  }

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  singupUser() {
    this._auth.registerUser(this.singupUserData)
      .subscribe((res: any) => {
        console.log(res);
        this._router.navigate(['/home']);
      }, ((err: any) => console.log(err)));
  }

}
