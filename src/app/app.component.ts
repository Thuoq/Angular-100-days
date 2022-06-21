import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Inline template
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'angular100-d-o-c';

  // Data binding
  inputType = 'text';
  user = {
    name: 'thuong',
    age: 0
  };

  //  Event binding

  handler(): void {
    console.log('Click');
  }

}
