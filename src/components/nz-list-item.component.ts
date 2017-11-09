import { Component, Input, ContentChild, TemplateRef, HostBinding, QueryList, ContentChildren, AfterContentInit, OnInit } from '@angular/core';
import { NzListItemActionComponent } from './nz-list-item-action.component';

@Component({
    selector: 'nz-list-item',
    template: `
    <ng-template #childTpl><ng-content></ng-content></ng-template>
    <ng-template #contentTpl>
        <div *ngIf="nzContent" class="ant-list-item-content"><ng-template [ngTemplateOutlet]="nzContent"></ng-template></div>
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
    <div *ngIf="nzExtra; else mainTpl" class="ant-list-item-extra-wrap">
        <div class="ant-list-item-main"><ng-template [ngTemplateOutlet]="mainTpl"></ng-template></div>
        <div class="ant-list-item-extra"><ng-template [ngTemplateOutlet]="nzExtra"></ng-template></div>
    </div>
    `
})
export class NzListItemComponent implements OnInit, AfterContentInit {

    @HostBinding('class.ant-list-item')
    _nzListItem = true;

    @ContentChildren(NzListItemActionComponent) _actions: QueryList<NzListItemActionComponent>;

    @ContentChild('nzContent') nzContent: TemplateRef<any>;

    @ContentChild('nzExtra') nzExtra: TemplateRef<any>;

    ngOnInit() {}

    ngAfterContentInit(): void {
    }
}
