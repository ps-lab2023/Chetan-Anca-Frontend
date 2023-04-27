import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Appointment} from "../model/Appointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  baseURL: string = "http://localhost:8080/appointment";

  constructor(private httpClient: HttpClient) {
  }

  getAppointmentById(id: number) {
    return this.httpClient.get<Appointment>(this.baseURL + "/findById?id=" + id)
  }

  getAppointmentByDoctorAndTime(firstName: string, lastName: string, date: Date) {
    return this.httpClient.get<Appointment>(this.baseURL + "/findByDoctorAndDate?firstName=" + firstName + "&lastName=" + lastName + "&date=" + date)
  }

  getAllAppointmentsByDoctorId(id: number) {
    return this.httpClient.get<Appointment[]>(this.baseURL + "/findByDoctorId?id=" + id);
  }

  getAllAppointmentsByDoctorName(firstName: string, lastName: string,) {
    return this.httpClient.get<Appointment[]>(this.baseURL + "/findByDoctorName?firstName=" + firstName + "&lastName=" + lastName);
  }

  getAllAppointmentsByAnimal(name: string) {
    return this.httpClient.get<Appointment[]>(this.baseURL + "/findByAnimal?name=" + name)
  }

  getAllByAnimalOwnerId(id: number | undefined) {
    return this.httpClient.get<Appointment[]>(this.baseURL + "/findByOwner?id=" + id)
  }

  getAllAppointmentsByTime(date: string) {
    return this.httpClient.get<Appointment[]>(this.baseURL + "/findByDate?date=" + date)
  }

  getAllAppointments() {
    return this.httpClient.get<Appointment[]>(this.baseURL)
  }

  addAppointment(appointment: Appointment) {
    return this.httpClient.post<Appointment>(this.baseURL + "/add", appointment)
  }

  updateAppointment(appointment: Appointment) {
    return this.httpClient.put<Appointment>(this.baseURL + "/update", appointment)
  }

  deleteAppointment(id: number) {
    return this.httpClient.delete(this.baseURL + "/delete?id=" + id)
  }
}
