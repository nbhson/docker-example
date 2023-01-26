import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "src/app/model/user.interface";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserAPI {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>("http://localhost:3000/user/all");
  }
}
