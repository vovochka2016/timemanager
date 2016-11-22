System.register(['@angular/core', './task-icons.component', './task-tooltip.directive', '../shared/shared'], function(exports_1, context_1) {
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
    var core_1, task_icons_component_1, task_tooltip_directive_1, shared_1;
    var TasksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_icons_component_1_1) {
                task_icons_component_1 = task_icons_component_1_1;
            },
            function (task_tooltip_directive_1_1) {
                task_tooltip_directive_1 = task_tooltip_directive_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            }],
        execute: function() {
            let TasksComponent = class TasksComponent {
                constructor(taskService, settingsService) {
                    this.taskService = taskService;
                    this.settingsService = settingsService;
                    this.tasks = [];
                    this.tasks = this.taskService.taskStore;
                    this.today = new Date();
                    this.queueHeaderMapping = settingsService.pluralsMap.tasks;
                    this.timerMinutes = settingsService.timerMinutes;
                }
                ngOnInit() {
                    this.updateQueuedPomodoros();
                }
                toggleTask(task) {
                    task.queued = !task.queued;
                    this.updateQueuedPomodoros();
                }
                updateQueuedPomodoros() {
                    this.queuedPomodoros = this.tasks
                        .filter((Task) => Task.queued)
                        .reduce((pomodoros, queuedTask) => {
                        return pomodoros + queuedTask.pomodorosRequired;
                    }, 0);
                }
            };
            TasksComponent = __decorate([
                core_1.Component({
                    selector: 'tasks',
                    directives: [task_icons_component_1.default, task_tooltip_directive_1.default],
                    pipes: [shared_1.SHARED_PIPES],
                    styleUrls: ['app/tasks/tasks.component.css'],
                    templateUrl: 'app/tasks/tasks.component.html'
                }), 
                __metadata('design:paramtypes', [shared_1.TaskService, shared_1.SettingsService])
            ], TasksComponent);
            exports_1("default", TasksComponent);
            ;
        }
    }
});
