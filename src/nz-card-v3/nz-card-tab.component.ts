import { Component, TemplateRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'nz-card-tab',
    template: `<ng-template #contentTpl><ng-content></ng-content></ng-template>`
})
export class NzCardTabComponent {

    // region: fieds

    _title = '';
    _titleTpl: TemplateRef<any>;
    @Input()
    set nzTabHeading(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._titleTpl = value;
        else
            this._title = value;
    }

    // endregion

    @ViewChild('titleTpl') titleTpl: TemplateRef<any>;

    @ViewChild('contentTpl') contentTpl: TemplateRef<any>;

}
