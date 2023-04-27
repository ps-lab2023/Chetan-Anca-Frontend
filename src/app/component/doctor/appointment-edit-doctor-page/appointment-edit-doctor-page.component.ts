import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../../model/Appointment";
import {AppointmentService} from "../../../service/AppointmentService";
import {
  DeleteAppointmentDialogComponent
} from "../../owner/delete-appointment-dialog/delete-appointment-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-appointment-edit-doctor-page',
  templateUrl: './appointment-edit-doctor-page.component.html',
  styleUrls: ['./appointment-edit-doctor-page.component.css']
})
export class AppointmentEditDoctorPageComponent implements OnInit {
  appointmentsList: Appointment[] = [];
  displayedColumns: string[] = ['ID', 'Animal Name', 'Date', 'Facilities', 'Actions']

  constructor(private appointmentService: AppointmentService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    const id = localStorage.getItem('userId')
    if (id != null) {
      this.appointmentService.getAllAppointmentsByDoctorId(parseInt(id, 10)).subscribe((data) => {
          console.log(data)
          this.appointmentsList = data
        },
        (_error) => {
          alert("You have no appointments registered!")
        });
    }
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteAppointmentDialogComponent, {
      width: '250px',
      data: {id},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.appointmentsList = this.appointmentsList.filter(
          (_) => _.appointmentId !== id
        );
      }
    });
  }
}
