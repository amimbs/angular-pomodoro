import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-timer-clock',
  standalone: true,
  imports: [],
  templateUrl: './timer-clock.component.html',
  styleUrls: ['./timer-clock.component.scss']
})

export class TimerClockComponent implements OnChanges{
  @Input() remainingTime!: number;
  @ViewChild('timer', { static: true }) timer!: ElementRef;
  hrs: string = '00';
  mins: string = '00';
  secs: string = '00';
  remainingTimeValues: any;

  ngOnChanges(changes: SimpleChanges): void {
    for (const inputRemainingTime in changes) {
       this.remainingTimeValues = changes[inputRemainingTime];
      if (this.remainingTimeValues.currentValue >= 6000){
        this.formatRemainingTime(this.remainingTimeValues.currentValue);
      } else if (this.remainingTimeValues.currentValue <= 6000 && this.remainingTimeValues.currentValue > 0 ){
        this.formatRemainingTime(this.remainingTimeValues.currentValue);
        this.timer.nativeElement.style.color = 'red';
      } else {
        this.hrs = '00';
        this.mins = '00';
        this.secs = '00';
        this.timer.nativeElement.style.color = 'black';
      }
    }
  }

  formatRemainingTime(remainingTimeValues: number): void {
    this.hrs = Math.floor((remainingTimeValues / (1000 * 60 * 60)) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    this.mins = Math.floor((remainingTimeValues / (1000 * 60 )) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    this.secs = Math.floor((remainingTimeValues / (1000)) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
  }
}
