import { Component } from '@angular/core';
import { TIMER_DIRECTIVES } from './timer/timer';
import { TASKS_DIRECTIVES } from './tasks/tasks';
import { SHARED_PROVIDERS } from './shared/shared';

@Component({
  selector: 'timer-app',
  directives: [TIMER_DIRECTIVES, TASKS_DIRECTIVES],
  providers: [SHARED_PROVIDERS],
  template: `
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <strong class="navbar-brand">Таймменеджмент application</strong>
        </div>
      </div>
    </nav>
    <timer-widget></timer-widget>
    <tasks></tasks>
    `
})
export default class AppComponent {}
