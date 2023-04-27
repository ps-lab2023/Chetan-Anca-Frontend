import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Animal} from "../../../model/Animal";
import {AnimalService} from "../../../service/AnimalService";
import {DeleteAnimalDialogComponent} from "../delete-animal-dialog/delete-animal-dialog.component";

@Component({
  selector: 'app-animal-edit-page',
  templateUrl: './animal-edit-page.component.html',
  styleUrls: ['./animal-edit-page.component.css']
})
export class AnimalEditPageComponent implements OnInit {
  animalsList: Animal[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Animal type', 'Breed', 'Age', 'Weight', 'Actions']

  constructor(private animalService: AnimalService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    const id = localStorage.getItem('userId')
    if (id != null) {
      this.animalService.getAllAnimalsByOwnerId(parseInt(id, 10)).subscribe((data) => {
          console.log(data)
          this.animalsList = data
        },
        (_error) => {
          alert("You have no animals registered!")
        });
    }
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteAnimalDialogComponent, {
      width: '250px',
      data: {id},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.animalsList = this.animalsList.filter(
          (_) => _.animalId !== id
        );
      }
    });
  }
}
