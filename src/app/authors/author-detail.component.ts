import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Author} from '../authors';

@Component({
  selector: 'app-author-detail',
  template: `
    <div>
      {{author.firstName}} {{author.lastName}}
      <button style="margin-left: 1rem" (click)="select.emit(author)"> Select</button>
      <button style="margin-left: 1rem" (click)="deleted.emit(author.id)"> X</button>

    </div>
  `
})
export class AuthorDetailComponent {
  @Input() author: Author;
  @Output('selected') select = new EventEmitter<Author>();
  @Output() deleted = new EventEmitter<number>();
}
