import {Component, InjectionToken, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest'; // non-static
import 'rxjs/add/observable/combineLatest'; // static
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/concatMap';
import {AlertService} from '../services/alert.service';
import {ApiService} from '../services/api.service';
import {EventBus} from '../services/event-bus';
import {Router} from '@angular/router';


export const serverUrlToken = new InjectionToken<string>('SERVER_URL');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  usernameControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordControl = new FormControl(null, [Validators.required]);


  // myValue: string;

  constructor(private myAlertService: AlertService,
              private apiService: ApiService,
              private eventBus: EventBus,
              private router: Router) {
    this.loginForm = new FormGroup({
      myUsername: this.usernameControl,
      passwordField: this.passwordControl
    });
  }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    const obs = this.apiService.login(this.usernameControl.value, this.passwordControl.value);
    obs.subscribe(data => {
        localStorage.setItem('USER_TOKEN', data.token);
        localStorage.setItem('USER_NAME', data.user.first_name + '' + data.user.last_name);


        this.eventBus.announce('LOGIN_SUCCESS', data.user);
        this.router.navigate(['']);
        this.myAlertService.success('Login Successful');
      },
      error => {
        this.loading = false;
        this.myAlertService.error(error.error.message);
      });
  }
}

// http://reactivex.io/documentation/operators.html
// http://rxmarbles.com/
