import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular100-d-o-c';
  isDanger = false;
  isWarning = false;
  classes = `box ${this.isDanger ? 'red-border' : ''} yellow-background`;

  toggleDanger(): void {
    this.isDanger = !this.isDanger;
    this.classes = `box ${this.isDanger ? 'red-border' : ''} yellow-background`;
  }
}
