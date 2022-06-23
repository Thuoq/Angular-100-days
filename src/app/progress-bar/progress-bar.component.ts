import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'blue';

  constructor() {
    console.log('Constructor Run ');
  }

  private _progress = 50;

  get progress() {
    return this._progress;
  }

  @Input() set progress(val: number) {
    console.log(val);
    this._progress = val;
  }

  ngOnInit(): void {
    // console.log('Ng On Intit Run ');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Ng On changes', changes);
  }
}
