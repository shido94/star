import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {


  constructor(private myAlertService: AlertService) {
    console.log("SignupComponent kaa constructor", myAlertService);
  }

  ngOnInit() {
  }

  signup() {
    console.log("signup form submitted");
  }



  goToLogin() {
  }
}
