import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../../model/Doctor";
import {DoctorService} from "../../../service/DoctorService";

@Component({
  selector: 'app-doctor-first-page',
  templateUrl: './doctor-first-page.component.html',
  styleUrls: ['./doctor-first-page.component.css']
})
export class DoctorFirstPageComponent implements OnInit {
  doctor: Doctor = new Doctor();

  constructor(private doctorService: DoctorService,
  ) {
  }

  ngOnInit(): void {
    const id = localStorage.getItem('userId')
    if (id != null) {
      this.getById(parseInt(id, 10))
    }
  }

  getById(id: number) {
    this.doctorService.getDoctorById(id).subscribe((data) => {
      this.doctor = data;
      console.log(this.doctor)
    });
  }
}
