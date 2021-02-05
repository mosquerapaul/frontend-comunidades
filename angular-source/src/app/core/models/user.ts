export class User {
  _id: string;
  name: string;
  email: string;
  preferences: object;

  constructor( ) {
    this._id = '';
    this.name = '';
    this.email = '';
    this.preferences = {};
  }
}
