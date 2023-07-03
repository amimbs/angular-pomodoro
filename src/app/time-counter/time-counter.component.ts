import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-counter',
  templateUrl: './time-counter.component.html',
  styleUrls: ['./time-counter.component.scss'],
})
export class TimeCounterComponent {
  public localTimeLimit = 20;
  @Output() TIME_LIMIT = new EventEmitter<number>();

  handleMinus() {
    if (this.localTimeLimit > 0) {
      this.localTimeLimit --;
      this.TIME_LIMIT.emit(this.localTimeLimit);
    }
 
  }
  handlePlus() {
    this.localTimeLimit ++;
    this.TIME_LIMIT.emit(this.localTimeLimit);
  }
}
