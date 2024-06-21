import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { TimerClockComponent } from '../timer-clock/timer-clock.component';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  semiCircles: any = [];
  hr: number = 0;
  min: number = 0;
  sec: number = 10;

  hours: number = this.hr * 3600000;
  minutes: number = this.min * 60000;
  seconds: number = this.sec * 1000;

  setTime: number = this.hours + this.minutes + this.seconds;
  startTime = Date.now();
  futureTime = this.startTime + this.setTime;
  timerLoop: any;
  currentTime: number = Date.now();
  remainingTime?: number;
  @Output() remainingTimeEvent = new EventEmitter<number>();

  angle?: any;

  ngOnInit(): void {
    this.semiCircles = document.querySelectorAll('.semiCircle');
    this.countDownTimer = this.countDownTimer.bind(this);
    this.timerLoop = setInterval(this.countDownTimer);
    this.countDownTimer();
  }

  countDownTimer() {
    this.currentTime = Date.now();
    this.remainingTime = this.futureTime - this.currentTime;
    this.remainingTimeEvent.emit(this.remainingTime);
    this.angle = (this.remainingTime / this.setTime) * 360;

    // progress indicator
    if (this.angle > 180) {
      this.semiCircles[2].style.display = 'none';
      this.semiCircles[0].style.transform = 'rotate(180deg)';
      this.semiCircles[1].style.transform = `rotate(${this.angle}deg)`;
    } else {
      this.semiCircles[2].style.display = 'block';
      this.semiCircles[0].style.transform = `rotate(${this.angle}deg)`;
      this.semiCircles[1].style.transform = `rotate(${this.angle}deg)`;
    }

    // 5 sec conditional
    if (this.remainingTime <= 6000) {
      this.semiCircles[0].style.backgroundColor = 'red';
      this.semiCircles[1].style.backgroundColor = 'red';
    }

    // end
    if (this.remainingTime < 0){
      clearInterval(this.timerLoop);
      this.semiCircles[0].style.display = 'none';
      this.semiCircles[1].style.display = 'none';
      this.semiCircles[2].style.display = 'none';
    }
  }
}
