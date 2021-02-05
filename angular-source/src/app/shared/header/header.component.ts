import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navList= ['home', 'dashboard', 'requests', 'record keeping'];
  public isMenuCollapsed: boolean = true;

  constructor( private _auth: AuthService ) {}

  ngOnInit(): void {
  }

  public logOut(): void { this._auth.logout(); }

  public userName(): string { return this._auth.currentUserValue.name || 'User' }
  public userId(): number { return parseInt(this._auth.currentUserValue._id)}
  public isAutenticated(): boolean { return this._auth.isAutenticated() }

}
