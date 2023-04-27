import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Owner} from "../model/Owner";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  baseURL: string = "http://localhost:8080/owner";

  constructor(private httpClient: HttpClient) {
  }

  getOwnerById(id: number) {
    return this.httpClient.get<Owner>(this.baseURL + "/findById?id=" + id)
  }

  getOwnerByEmail(email: string) {
    return this.httpClient.get<Owner>(this.baseURL + "/findByEmail?email=" + email)
  }

  getOwnerByFirstNameAndLastName(firstName: string, lastName: string) {
    return this.httpClient.get<Owner>(this.baseURL + "/findByFullName?firstName=" + firstName + "&lastName=" + lastName)
  }

  getAllOwnersByFirstName(firstName: string) {
    return this.httpClient.get<Owner[]>(this.baseURL + "/findByFirstName?firstName=" + firstName)

  }

  getAllOwnersByLastName(lastName: string) {
    return this.httpClient.get<Owner[]>(this.baseURL + "/findByLastName?lastName=" + lastName)

  }

  getOwnerByEmailAndPassword(email: string, password: string) {
    return this.httpClient.get<Owner>(this.baseURL + "/findByCredentials?email=" + email + "&password=" + password)
  }

  getAllOwners() {
    return this.httpClient.get<Owner[]>(this.baseURL)
  }

  addOwner(owner: Owner) {
    return this.httpClient.post<Owner>(this.baseURL + "/add", owner)
  }

  updateOwner(owner: Owner) {
    return this.httpClient.put<Owner>(this.baseURL + "/update", owner)
  }

  deleteOwner(id: number) {
    return this.httpClient.delete(this.baseURL + "/delete?id=" + id)
  }

  register(owner: Owner) {
    return this.httpClient.post<Owner>(this.baseURL + "/register", owner);
  }
}
