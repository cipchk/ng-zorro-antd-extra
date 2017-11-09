import { Component, Input, ContentChild, TemplateRef, HostBinding } from '@angular/core';

@Component({
    selector: 'nz-list-item-meta',
    template: `
    <div *ngIf="nzAvatar" class="ant-list-item-meta-avatar">
        <ng-template [ngTemplateOutlet]="nzAvatar"></ng-template>
    </div>
    <div *ngIf="nzTitle || nzDescription" class="ant-list-item-meta-content">
        <h4 *ngIf="nzTitle" class="ant-list-item-meta-title">
            <ng-template [ngTemplateOutlet]="nzTitle"></ng-template>
        </h4>
        <div *ngIf="nzDescription" class="ant-list-item-meta-description">
            <ng-template [ngTemplateOutlet]="nzDescription"></ng-template>
        </div>
    </div>
    `
})
export class NzListItemMetaComponent {

    @HostBinding('class.ant-list-item-meta')
    _nzListItemMeta = true;

    @ContentChild('nzAvatar') nzAvatar: TemplateRef<any>;

    @ContentChild('nzDescription') nzDescription: TemplateRef<any>;

    @ContentChild('nzTitle') nzTitle: TemplateRef<any>;
}
