import {Component, OnInit} from '@angular/core';
import {Animal} from "../../../model/Animal";
import {Owner} from "../../../model/Owner";
import {AnimalService} from "../../../service/AnimalService";
import {OwnerService} from "../../../service/OwnerService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-animal-page',
  templateUrl: './add-animal-page.component.html',
  styleUrls: ['./add-animal-page.component.css']
})
export class AddAnimalPageComponent implements OnInit {
  animal: Animal = new Animal();
  owner: Owner = new Owner();

  constructor(
    private animalService: AnimalService,
    private ownerService: OwnerService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  add() {
    const id = localStorage.getItem('userId')
    if (id != null) {
      this.ownerService.getOwnerById(parseInt(id, 10)).subscribe((foundOwner) => {
        this.owner = foundOwner;
        this.animal.owner = this.owner
        console.log(this.animal)
        this.animalService.addAnimal(this.animal).subscribe(() => {
          this.router.navigate(['owner', 'animalsEdit']);
        }, (_error) => {
          alert("Wrong animal details")
        });
      });
    }
  }
}
