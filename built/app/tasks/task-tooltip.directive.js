System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var TaskTooltipDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let TaskTooltipDirective = class TaskTooltipDirective {
                onMouseOver() {
                    if (!this.defaultTooltipText && this.taskTooltip) {
                        this.defaultTooltipText = this.taskTooltip.innerText;
                    }
                    this.taskTooltip.innerText = this.task.name;
                }
                onMouseOut() {
                    if (this.taskTooltip) {
                        this.taskTooltip.innerText = this.defaultTooltipText;
                    }
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], TaskTooltipDirective.prototype, "task", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], TaskTooltipDirective.prototype, "taskTooltip", void 0);
            __decorate([
                core_1.HostListener('mouseover'), 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', []), 
                __metadata('design:returntype', void 0)
            ], TaskTooltipDirective.prototype, "onMouseOver", null);
            __decorate([
                core_1.HostListener('mouseout'), 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', []), 
                __metadata('design:returntype', void 0)
            ], TaskTooltipDirective.prototype, "onMouseOut", null);
            TaskTooltipDirective = __decorate([
                core_1.Directive({
                    selector: '[task]'
                }), 
                __metadata('design:paramtypes', [])
            ], TaskTooltipDirective);
            exports_1("default", TaskTooltipDirective);
        }
    }
});
