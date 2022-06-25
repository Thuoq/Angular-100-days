import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ToggleComponent} from './toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular100-d-o-c';
  isChecked = true;
  showLast = false;
  // match vs template variable
  // chi set static: true neu no k nam trong structure directives nao
  // va khi viewchild neu dinh trong structure directives thi kho
  @ViewChild('toggleComponent', {
    static: true
  }) toggleComponent: ToggleComponent;

  @ViewChildren('nameInput') inputName: QueryList<HTMLInputElement>;

  ngOnInit(): void {
    console.log('Ng On Init');

  }

  ngAfterViewInit(): void {
    console.log('After View Init');
    console.log(this.inputName);

    console.log(this.inputName.changes.subscribe(console.log));
  }

}
