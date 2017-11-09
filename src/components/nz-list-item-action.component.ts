import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'nz-list-item-action',
    template: `<ng-template #template><ng-content></ng-content></ng-template>`
})
export class NzListItemActionComponent {

    @ViewChild('template') template: TemplateRef<any>;

}
