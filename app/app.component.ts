import {Component} from 'angular2/core';
import {InputText} from "./inputs/inputText.component";
@Component({
    selector: 'my-app',
    template: '<h1>Just Begin !</h1><my-input></my-input>',
    directives:[InputText]
})
export class AppComponent { }
