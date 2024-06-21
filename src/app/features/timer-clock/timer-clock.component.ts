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
      this.formatRemainingTime(this.remainingTimeValues.currentValue);
    }
  }

  formatRemainingTime(remainingTimeValues: any): void {
    this.hrs = Math.floor((remainingTimeValues / (1000 * 60 * 60)) % 24);
    this.mins = Math.floor((remainingTimeValues / (1000 * 60 )) % 60);
    this.secs = Math.floor((remainingTimeValues / (1000)) % 24);    
  }
}
