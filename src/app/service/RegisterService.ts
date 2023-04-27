import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Owner} from "../model/Owner";


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseURL: string = "http://localhost:8080/register";

  constructor(private httpClient: HttpClient) {
  }

  register(owner: Owner) {
    return this.httpClient.post<Owner>(this.baseURL, owner);
  }
}
