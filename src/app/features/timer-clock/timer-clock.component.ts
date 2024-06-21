import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-timer-clock',
  standalone: true,
  imports: [],
  templateUrl: './timer-clock.component.html',
  styleUrl: './timer-clock.component.scss'
})
export class TimerClockComponent implements OnChanges{
  @Input() remainingTime!: number;
  timer: any;
  hrs: any;
  mins: any;
  secs: any;
  remainingTimeValues: any;

  ngOnChanges(changes: SimpleChanges): void {
    for (const inputRemainingTime in changes) {
       this.remainingTimeValues = changes[inputRemainingTime];
      // console.log(this.remainingTimeValues)
      if (this.remainingTimeValues.currentValue >= 0){
        this.formatRemainingTime(this.remainingTimeValues.currentValue);
      } else {
        this.hrs = '00';
        this.mins = '00';
        this.secs = '00';
      }
    }
  }

  formatRemainingTime(remainingTimeValues: any): void {
    this.hrs = Math.floor((remainingTimeValues / (1000 * 60 * 60)) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    this.mins = Math.floor((remainingTimeValues / (1000 * 60 )) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    this.secs = Math.floor((remainingTimeValues / (1000)) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
  }
}
