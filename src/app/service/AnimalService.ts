import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Animal} from "../model/Animal";
import {AnimalType} from "../model/AnimalType";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  baseURL: string = "http://localhost:8080/animal";

  constructor(private httpClient: HttpClient) {
  }

  getAnimalById(id: number) {
    return this.httpClient.get<Animal>(this.baseURL + "/findById?id=" + id)
  }

  getAllAnimalsByName(name: string) {
    return this.httpClient.get<Animal[]>(this.baseURL + "/findByName?name=" + name)
  }

  getAllAnimalsByOwnerId(id: number | undefined) {
    return this.httpClient.get<Animal[]>(this.baseURL + "/findByOwner?id=" + id);
  }

  getAllAnimalsByType(animalType: AnimalType) {
    return this.httpClient.get<Animal[]>(this.baseURL + "/findByType?type=" + animalType)
  }

  getAllAnimalsByAgeGraterThan(age: number) {
    return this.httpClient.get<Animal[]>(this.baseURL + "/findByAgeGrater?age=" + age)

  }

  getAllByWeightLessThan(weight: number) {
    return this.httpClient.get<Animal[]>(this.baseURL + "/findByWeightLess?weight=" + weight)
  }

  getAllAnimals() {
    return this.httpClient.get<Animal[]>(this.baseURL)
  }

  addAnimal(animal: Animal) {
    return this.httpClient.post<Animal>(this.baseURL + "/add", animal)
  }

  updateAnimal(animal: Animal) {
    return this.httpClient.put<Animal>(this.baseURL + "/update", animal)
  }

  deleteAnimal(id: number) {
    return this.httpClient.delete(this.baseURL + "/delete?id=" + id)
  }

}
