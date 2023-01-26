import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserAPI } from 'src/api/user.api';
import { IUser } from '../model/user.interface';

@Injectable()
export class UserService {
  usersMap: Map<string, IUser>;

  constructor(private _userAPI: UserAPI) { }

  getUsers(): Observable<IUser[]> {
    return this._userAPI.getUsers();
  }
}