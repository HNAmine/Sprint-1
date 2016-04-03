import {Component} from 'angular2/core';
@Component({
    selector: 'my-input',
    templateUrl: 'app/inputs/inputText.html',
    styleUrls: ['app/inputs/all.css']
})
export class InputText {
    value:string = "";
    isFull(){
        if(!this.value || this.value.length == 0){
            return false;
        }
        return true;
    }
}