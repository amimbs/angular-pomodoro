import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimerComponent } from "./features/timer/timer.component";
import { TimerClockComponent } from './features/timer-clock/timer-clock.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, TimerComponent, TimerClockComponent]
})
export class AppComponent {
  title = 'pomodoro-app';
}
