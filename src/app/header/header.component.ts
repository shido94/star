import {Component, OnInit} from '@angular/core';
import {EventBus} from '../services/event-bus';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string | null;

  constructor(private eventBus: EventBus, private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('USER_NAME');

    this.eventBus.listen('LOGIN_SUCCESS').subscribe(user => {
      this.username = user.first_name + ' ' + user.last_name;
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
