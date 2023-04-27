import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OwnerService} from "../../../service/OwnerService";
import {Owner} from "../../../model/Owner";

@Component({
  selector: 'app-add-owner-page',
  templateUrl: './add-owner-page.component.html',
  styleUrls: ['./add-owner-page.component.css']
})
export class AddOwnerPageComponent implements OnInit {
  owner = new Owner();

  constructor(
    private ownerService: OwnerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  add() {
    this.ownerService.addOwner(this.owner).subscribe(() => {
      this.router.navigate(['/ownerEdit']);
    }, (_error) => {
      alert("Wrong owner details")
    });
  }
}
