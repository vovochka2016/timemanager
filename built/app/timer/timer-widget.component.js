System.register(['@angular/core', '../shared/shared'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shared_1;
    var TimerWidgetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            }],
        execute: function() {
            let TimerWidgetComponent = class TimerWidgetComponent {
                constructor(settingsService) {
                    this.settingsService = settingsService;
                    this.buttonLabelsMap = settingsService.labelsMap.timer;
                }
                ngOnInit() {
                    this.resetPomodoro();
                    setInterval(() => this.tick(), 1000);
                }
                resetPomodoro() {
                    this.isPaused = true;
                    this.minutes = this.settingsService.timerMinutes - 1;
                    this.seconds = 59;
                    this.buttonLabelKey = 'start';
                }
                tick() {
                    if (!this.isPaused) {
                        this.buttonLabelKey = 'pause';
                        if (--this.seconds < 0) {
                            this.seconds = 59;
                            if (--this.minutes < 0) {
                                this.resetPomodoro();
                            }
                        }
                    }
                }
                togglePause() {
                    this.isPaused = !this.isPaused;
                    if (this.minutes < this.settingsService.timerMinutes || this.seconds < 59) {
                        this.buttonLabelKey = this.isPaused ? 'resume' : 'pause';
                    }
                }
            };
            TimerWidgetComponent = __decorate([
                core_1.Component({
                    selector: 'timer-widget',
                    template: `
    <div class="text-center">
      <img src="/app/shared/assets/img/pomodoro.png" alt="Pomodoro">
      <h1> {{ minutes }}:{{ seconds  | number: '2.0' }} </h1>
      <p>
        <button (click)="togglePause()" class="btn btn-danger">
        {{ buttonLabelKey | i18nSelect: buttonLabelsMap }}
        </button>
      </p>
    </div>`
                }), 
                __metadata('design:paramtypes', [shared_1.SettingsService])
            ], TimerWidgetComponent);
            exports_1("default", TimerWidgetComponent);
        }
    }
});
