import {Component} from '@angular/core';
import {Author, authors} from '../authors';

@Component({
  selector: 'app-author-list',
  template: `
    <app-author-detail
      *ngFor="let author of authors"
      [author]="author"
      (selected)="onSelected($event)"
      (deleted)="onDeleted($event)"
    >

    </app-author-detail>
    <div>
      current selected author : {{currentAuthor?.firstName}}
    </div>
  `
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];

  onSelected(selectedAuthor: Author): void {
    console.log(selectedAuthor);
    this.currentAuthor = selectedAuthor;
  }

  onDeleted(deletedId: number): void {
    console.log(deletedId);
    this.authors = this.authors.filter(author => author.id !== deletedId);
    if (this.currentAuthor.id === deletedId) {
      this.currentAuthor = this.authors[0];
    }

  }
}
