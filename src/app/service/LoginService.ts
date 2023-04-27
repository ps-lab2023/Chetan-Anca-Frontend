import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../model/User";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = "http://localhost:8080/login";
  isAuthenticate: boolean = false;

  constructor(private httpClient: HttpClient) {
  }

  login(user: User) {
    return this.httpClient.post<User>(this.baseURL, user)
  }

  verify(email: string | undefined) {
    return this.httpClient.get<number>(this.baseURL + "/verify?email=" + email)
  }
}
