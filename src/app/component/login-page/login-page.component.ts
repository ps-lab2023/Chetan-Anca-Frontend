import {Component, Injectable, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {LoginService} from "../../service/LoginService";
import {UserType} from "../../model/UserType";
import {Router} from '@angular/router';

@Injectable(
  {
    providedIn: 'root'
  })

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: User = new User();
  expectedCode: any
  show: boolean = false
  code: any

  constructor(private loginService: LoginService, private router: Router) {

  }

  ngOnInit() {

  }

  userLogin() {
    console.log(this.user)
    this.loginService.login(this.user).subscribe(foundUser => {
      console.log(foundUser)
      this.user = foundUser
      if (foundUser.id != undefined) {
        localStorage.setItem('userId', foundUser.id.toLocaleString())
      }
      alert("Correct email and password!")
      if (this.user.userType == UserType.ADMIN) {
        this.router.navigateByUrl('/admin')
      } else if (this.user.userType == UserType.OWNER) {
        this.router.navigateByUrl('/owner')
      } else {
        this.router.navigateByUrl('/doctor')
      }
      // this.loginService.verify(foundUser.email).subscribe(response => {
      //   this.expectedCode = response
      // })
      // this.show = true
    }, error => {
      alert("Enter correct email and password")
    })
  }

  verify() {
    if (this.code == this.expectedCode) {
      alert("Login successfully")
      if (this.user.userType == UserType.ADMIN) {
        this.router.navigateByUrl('/admin')
      } else if (this.user.userType == UserType.OWNER) {
        this.router.navigateByUrl('/owner')
      } else {
        this.router.navigateByUrl('/doctor')
      }
    }
  }

  userRegister() {
    this.router.navigateByUrl('/register')
  }
}
