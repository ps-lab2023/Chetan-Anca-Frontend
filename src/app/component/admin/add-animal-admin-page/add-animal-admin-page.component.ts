import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Animal} from "../../../model/Animal";
import {Owner} from "../../../model/Owner";
import {AnimalService} from "../../../service/AnimalService";
import {OwnerService} from "../../../service/OwnerService";

@Component({
  selector: 'app-add-animal-admin-page',
  templateUrl: './add-animal-admin-page.component.html',
  styleUrls: ['./add-animal-admin-page.component.css']
})
export class AddAnimalAdminPageComponent implements OnInit {
  animal = new Animal();
  owner = new Owner();

  ownerFirstName: string = ""
  ownerLastName: string = ""

  constructor(
    private animalService: AnimalService,
    private ownerService: OwnerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  add() {
    this.ownerService.getOwnerByFirstNameAndLastName(this.ownerFirstName, this.ownerLastName).subscribe((foundOwner) => {
      this.animal.owner = foundOwner
      this.animalService.addAnimal(this.animal).subscribe((animal) => {
        this.router.navigate(['/animalEdit']);
      }, error => {
        alert("Wrong animal details")
      })
    })
  }
}
