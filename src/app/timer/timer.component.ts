import {
  // AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  TIME_LIMIT = 20;
  public timePassed = 0;
  public timeLeft = this.TIME_LIMIT;
  public timerInterval: number | undefined;

  @ViewChild('baseTimerLabel', { static: false }) baseTimerLabel!: ElementRef;
  @ViewChild('baseTimerPathRemaining')
  baseTimerPathRemaining!: ElementRef<SVGPathElement>;

  constructor(private cd: ChangeDetectorRef) {}

  // ngAfterViewInit(): void {
  //   // this.startTimer();
  // }

  startTimer() {
    this.timerInterval = window.setInterval(() => {
      // The amount of time passed increments by one
      this.timePassed++;
      this.timeLeft = this.TIME_LIMIT - this.timePassed;

      if (this.timeLeft <= 0) {
        // Checks if timeLeft is less than or equal to 0
        window.clearInterval(this.timerInterval); // Stops the timer
        this.timeLeft = 0; // To ensure it doesn't go to negative
      }
    }, 1000);
  }

  formatTimeLeft(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }

  // A method that calculates the timeLeft as a percentage of the total time
  calculatePercentage() {
    return (this.timeLeft / this.TIME_LIMIT) * 100;
  }
}
