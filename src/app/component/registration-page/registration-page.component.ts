import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Owner} from "../../model/Owner";
import {RegisterService} from "../../service/RegisterService";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  owner: Owner = new Owner();

  constructor(private registerService: RegisterService, private router: Router) {

  }

  ngOnInit() {

  }

  ownerRegister() {
    console.log(this.owner)
    this.registerService.register(this.owner).subscribe(addedOwner => {
      console.log(addedOwner)
      alert("Registration successfully")
      this.router.navigateByUrl('/login')
    }, error => {
      alert("Wrong details")
    })
  }
}
