import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MedicalFacility} from "../model/MedicalFacility";

@Injectable({
  providedIn: 'root'
})

export class MedicalFacilityService {
  baseURL: string = "http://localhost:8080/facility";

  constructor(private httpClient: HttpClient) {
  }

  getMedicalFacilityById(id: number) {
    return this.httpClient.get<MedicalFacility>(this.baseURL + "/findById?id=" + id)
  }

  getMedicalFacilityByName(name: string) {
    return this.httpClient.get<MedicalFacility>(this.baseURL + "/findByName?name=" + name)
  }

  getMedicalFacilityByNameContaining(name: string) {
    return this.httpClient.get<MedicalFacility[]>(this.baseURL + "/findByNameContaining?name=" + name)
  }

  getAllMedicalFacilitiesByPrice(price: number) {
    return this.httpClient.get<MedicalFacility[]>(this.baseURL + "/findByPrice?price=" + price)
  }

  getAllMedicalFacilities() {
    return this.httpClient.get<MedicalFacility[]>(this.baseURL)
  }

  addMedicalFacility(medicalFacility: MedicalFacility) {
    return this.httpClient.post<MedicalFacility>(this.baseURL + "/add", medicalFacility)
  }

  updateMedicalFacility(medicalFacility: MedicalFacility) {
    return this.httpClient.put<MedicalFacility>(this.baseURL + "/update", medicalFacility)
  }

  deleteMedicalFacility(id: number) {
    return this.httpClient.delete(this.baseURL + "/delete?id=" + id)
  }


}
