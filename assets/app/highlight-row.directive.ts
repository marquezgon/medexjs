import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[medexHighlightRow]'
})
export class HighlightRow {

    private rowTarget; //store the selected row

    @HostListener('click', ['$event.target']) select(cell) {
        let row = cell.parentNode;
        if(row !== this.rowTarget) {
            if(this.rowTarget) {
                this.rowTarget.className = "";
            }

            this.rowTarget = row;
            this.rowTarget.className="info";
        }
    }
}