import {Component, OnInit} from '@angular/core';
import {Owner} from "../../../model/Owner";
import {Appointment} from "../../../model/Appointment";
import {OwnerService} from "../../../service/OwnerService";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {AppointmentService} from "../../../service/AppointmentService";
import {DeleteAppointmentDialogComponent} from "../delete-appointment-dialog/delete-appointment-dialog.component";

@Component({
  selector: 'app-appointment-edit-page',
  templateUrl: './appointment-edit-page.component.html',
  styleUrls: ['./appointment-edit-page.component.css']
})
export class AppointmentEditPageComponent implements OnInit {
  appointmentsList: Appointment[] = [];
  displayedColumns: string[] = ['ID', 'Doctor First Name', 'Doctor Last Name', 'Date', 'Facilities', 'Actions']
  owner: Owner = new Owner;

  constructor(private appointmentService: AppointmentService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    var id = localStorage.getItem('userId')
    if (id != null) {
      this.appointmentService.getAllByAnimalOwnerId(parseInt(id, 10)).subscribe((data) => {
          console.log(data)
          this.appointmentsList = data
        },
        (_error) => {
          alert("You have no animals registered!")
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
