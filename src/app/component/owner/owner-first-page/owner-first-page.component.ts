import {Component, OnInit} from '@angular/core';
import {Owner} from "../../../model/Owner";
import {OwnerService} from "../../../service/OwnerService";

@Component({
  selector: 'app-owner-first-page',
  templateUrl: './owner-first-page.component.html',
  styleUrls: ['./owner-first-page.component.css']
})
export class OwnerFirstPageComponent implements OnInit {
  owner: Owner = new Owner();

  constructor(private ownerService: OwnerService,
  ) {
  }

  ngOnInit(): void {
    const id = localStorage.getItem('userId')
    if (id != null) {
      this.getById(parseInt(id, 10))
    }
  }

  getById(id: number) {
    this.ownerService.getOwnerById(id).subscribe((ownerFound) => {
      this.owner = ownerFound;
      console.log(this.owner)
    });
  }
}
