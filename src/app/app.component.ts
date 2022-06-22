import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular100-d-o-c';
  users = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    {
      id: 3,
      firstName: 'Pertrol',
      lastName: 'Limeax',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.120.237.33',
    },
    {
      id: 4,
      firstName: 'FPT',
      lastName: 'Software',
      email: 'fpt0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
  ];
}
