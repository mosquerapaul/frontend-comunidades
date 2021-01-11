import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navList= ['home', 'dashboard', 'login', 'singup'];
  public isMenuCollapsed: boolean = true;

  constructor( private _auth: AuthService ) {}

  ngOnInit(): void {
  }

  logOut() {
    this._auth.logout();
  }

}
