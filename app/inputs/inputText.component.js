System.register(['angular2/core'], function(exports_1, context_1) {
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
    var InputText;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputText = (function () {
                function InputText() {
                    this.value = "HANANE Amine";
                }
                InputText = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        templateUrl: 'app/inputs/inputText.html',
                        styleUrls: ['app/inputs/bootstrap.min.css', 'app/inputs/components.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputText);
                return InputText;
            }());
            exports_1("InputText", InputText);
        }
    }
});
//# sourceMappingURL=inputText.component.js.map