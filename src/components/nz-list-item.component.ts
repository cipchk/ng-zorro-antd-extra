import { Component, Input, ContentChild, TemplateRef, HostBinding, QueryList, ContentChildren } from '@angular/core';
import { NzListItemActionComponent } from './nz-list-item-action.component';

@Component({
    selector: 'nz-list-item',
    template: `
    <ng-template #childTpl><ng-content></ng-content></ng-template>
    <ng-template #contentTpl>
        <div *ngIf="content" class="ant-list-item-content">
            <ng-template #defaultContentContent>{{_content}}</ng-template>
            <ng-template [ngTemplateOutlet]="_contentTpl || defaultContentContent"></ng-template>
        </div>
    </ng-template>
    <ng-template #actionTpl>
        <ul #actionTpl *ngIf="_actions && _actions.length > 0" class="ant-list-item-action">
            <li *ngFor="let i of _actions; let idx = index">
                <ng-template [ngTemplateOutlet]="i.template"></ng-template>
                <em *ngIf="idx!==_actions.length-1" class="ant-list-item-action-split"></em>
            </li>
        </ul>
    </ng-template>
    <ng-template #mainTpl>
        <ng-template [ngTemplateOutlet]="childTpl"></ng-template>
        <ng-template [ngTemplateOutlet]="contentTpl"></ng-template>
        <ng-template [ngTemplateOutlet]="actionTpl"></ng-template>
    </ng-template>
    <div *ngIf="extra; else mainTpl" class="ant-list-item-extra-wrap">
        <div class="ant-list-item-main"><ng-template [ngTemplateOutlet]="mainTpl"></ng-template></div>
        <div class="ant-list-item-extra">
            <ng-template #defaultExtraContent>{{_extra}}</ng-template>
            <ng-template [ngTemplateOutlet]="_extraTpl || defaultExtraContent"></ng-template>
        </div>
    </div>
    `
})
export class NzListItemComponent {

    @HostBinding('class.ant-list-item')
    _nzListItem = true;

    @ContentChildren(NzListItemActionComponent) _actions: QueryList<NzListItemActionComponent>;

    content = false;
    _content = '';
    _contentTpl: TemplateRef<any>;
    @Input()
    set nzContent(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._contentTpl = value;
        else
            this._content = value;

        this.content = !!value;
    }

    extra = false;
    _extra = '';
    _extraTpl: TemplateRef<any>;
    @Input()
    set nzExtra(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._extraTpl = value;
        else
            this._extra = value;

        this.extra = !!value;
    }
}
