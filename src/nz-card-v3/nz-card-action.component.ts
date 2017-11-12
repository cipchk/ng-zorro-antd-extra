import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'nz-card-action',
    template: `<ng-template #tpl><ng-content></ng-content></ng-template>`
})
export class NzCardActionComponent {

    @ViewChild('tpl') tpl: TemplateRef<any>;

}
