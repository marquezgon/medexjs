import {Component, OnInit, Input} from '@angular/core';
import { Dropdown } from "./dropdown.directive";
import {Doctor} from "./auth/doctor";

@Component({
    moduleId: module.id,
    selector: 'my-header',
    templateUrl: 'header.component.html',
    styles: [`
        .navbar {
            margin-bottom: 0;
        }
        
        .navbar .navbar-nav > li > a {
            color: white;
        }
        
        .navbar .navbar-nav > li {
            z-index: 9999;
        }
    `],
    directives: [Dropdown]
})
export class HeaderComponent implements OnInit {

    @Input() user: Doctor;

    constructor() {}

    ngOnInit() {
    }

}
