import {Component} from 'angular2/core';
@Component({
    selector: 'my-input',
    templateUrl: 'app/inputs/inputText.html',
    styleUrls: ['app/inputs/bootstrap.min.css', 'app/inputs/components.css']
})
export class InputText {
    value:string = "HANANE Amine";
}