import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../../model/Doctor";
import {Router} from "@angular/router";
import {DoctorService} from "../../../service/DoctorService";

@Component({
  selector: 'app-add-doctor-page',
  templateUrl: './add-doctor-page.component.html',
  styleUrls: ['./add-doctor-page.component.css']
})
export class AddDoctorPageComponent implements OnInit {
  doctor = new Doctor();

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  add() {
    this.doctorService.addDoctor(this.doctor).subscribe(() => {
      this.router.navigate(['/doctorEdit']);
    }, (_error) => {
      alert("Wrong doctor details")
    });
  }

}
