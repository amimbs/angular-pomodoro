import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

interface ColorCodes {
  info: {
    color: string;
  };
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements AfterViewInit {

  public TIME_LIMIT: number = 20;
  public timePassed: number;
  public timeLeft: number;
  public timerInterval: any;
  public COLOR_CODES: ColorCodes;
  public remainingPathColor: string;
  public FULL_DASH_ARRAY: number = 283;

  @ViewChild('baseTimerLabel', { static: false }) baseTimerLabel!: ElementRef;
  @ViewChild("baseTimerPathRemaining") baseTimerPathRemaining!: ElementRef<SVGPathElement>;

  constructor(private cd: ChangeDetectorRef) {
    // Start with an initial value of 20 seconds
    // Initially, no time has passed, but this will count up
    // and subtract from the TIME_LIMIT
    this.timePassed = 0;
    this.timeLeft = this.TIME_LIMIT;
    this.timerInterval = null;
    this.COLOR_CODES = {
      info: {
        color: "green"
      }
    };
    this.remainingPathColor = this.COLOR_CODES.info.color;
  }

  ngAfterViewInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      // The amount of time passed increments by one
      this.timePassed++;
      this.timeLeft = this.TIME_LIMIT - this.timePassed;

      // The time left label is updated
      // this.baseTimerLabel.nativeElement.innerHTML = this.formatTimeLeft(this.timeLeft);

      //this.setCircleDasharray();
    }, 1000);
  }

  formatTimeLeft(time: number) {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  // calculateTimeFraction() {
  //   return this.timeLeft / this.TIME_LIMIT;
  // }

  // setCircleDasharray() {
  //   const circleDasharray = `${(this.calculateTimeFraction() * this.FULL_DASH_ARRAY).toFixed(0)} 283`;
  //   this.baseTimerPathRemaining.nativeElement.setAttribute("stroke-dasharray", circleDasharray);
  // }

  // setCircleDasharray() {
  //   // it's not entering tyhe if conditional
  //   if (this.baseTimerPathRemaining && this.baseTimerPathRemaining.nativeElement) {

  //     console.log('hi')
  //     const circleDasharray = `${(this.calculateTimeFraction() * this.FULL_DASH_ARRAY).toFixed(0)} 283`;
  //     this.baseTimerPathRemaining.nativeElement.setAttribute("stroke-dasharray", circleDasharray);
  //     this.cd.detectChanges();  // manually trigger change detection here
  //   } else ( console.log('goddammit wtf'))
  // }

}