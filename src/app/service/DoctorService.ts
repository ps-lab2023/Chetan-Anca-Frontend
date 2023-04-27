import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../model/Doctor";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseURL: string = "http://localhost:8080/doctor";

  constructor(private httpClient: HttpClient) {
  }

  getDoctorById(id: number) {
    return this.httpClient.get<Doctor>(this.baseURL + "/findById?id=" + id)
  }

  getDoctorByEmail(email: string) {
    return this.httpClient.get<Doctor>(this.baseURL + "/findByEmail?email=" + email)
  }

  getDoctorsByFirstName(firstName: string) {
    return this.httpClient.get<Doctor[]>(this.baseURL + "/findByFirstName?firstName=" + firstName)
  }

  getDoctorsByLastName(lastName: string) {
    return this.httpClient.get<Doctor[]>(this.baseURL + "/findByLastName?lastName=" + lastName)
  }

  getDoctorByFirstNameAndLastName(firstName: string, lastName: string) {
    return this.httpClient.get<Doctor>(this.baseURL + "/findByFullName?firstName=" + firstName + "&lastName=" + lastName)
  }

  getDoctorByEmailAndPassword(email: string, password: string) {
    return this.httpClient.get<Doctor>(this.baseURL + "/findByCredentials?email=" + email + "&password=" + password)
  }

  getAllDoctors() {
    return this.httpClient.get<Doctor[]>(this.baseURL)
  }

  addDoctor(doctor: Doctor) {
    return this.httpClient.post<Doctor>(this.baseURL + "/add", doctor)
  }

  updateDoctor(doctor: Doctor) {
    return this.httpClient.put<Doctor>(this.baseURL + "/update", doctor)
  }

  deleteDoctor(id: number) {
    return this.httpClient.delete(this.baseURL + "/delete?id=" + id)
  }
}
