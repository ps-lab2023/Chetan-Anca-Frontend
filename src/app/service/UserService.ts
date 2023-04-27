import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../model/User";
import {UserType} from "../model/UserType";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "http://localhost:8080/user";

  constructor(private httpClient: HttpClient) {
  }

  getUserById(id: number) {
    return this.httpClient.get<User>(this.baseURL + "/findById?id=" + id)
  }

  getUserByEmailAndPassword(email: string, password: string) {
    return this.httpClient.get<User>(this.baseURL + "/findByCredentials?email=" + email + "&password=" + password)
  }

  getAllUsersByUserType(userType: UserType) {
    return this.httpClient.get<User[]>(this.baseURL + "/findAllByUserType?userType=" + userType)
  }

  getAllUsers() {
    return this.httpClient.get<User[]>(this.baseURL)
  }

  login(user: User) {
    return this.httpClient.post<User>(this.baseURL + "/login", user)
  }
}
