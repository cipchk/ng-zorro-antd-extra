import { Component, Input, ContentChild, TemplateRef, HostBinding } from '@angular/core';

@Component({
    selector: 'nz-list-item-meta',
    template: `
    <div *ngIf="avatar" class="ant-list-item-meta-avatar">
        <ng-template #defaultAvatarContent><nz-avatar [nzSrc]="_avatar"></nz-avatar></ng-template>
        <ng-template [ngTemplateOutlet]="_avatarTpl || defaultAvatarContent"></ng-template>
    </div>
    <div *ngIf="title || desc" class="ant-list-item-meta-content">
        <h4 *ngIf="title" class="ant-list-item-meta-title">
            <ng-template #defaultTitleContent>{{_title}}</ng-template>
            <ng-template [ngTemplateOutlet]="_titleTpl || defaultTitleContent"></ng-template>
        </h4>
        <div *ngIf="desc" class="ant-list-item-meta-description">
            <ng-template #defaultDescContent>{{_desc}}</ng-template>
            <ng-template [ngTemplateOutlet]="_descTpl || defaultDescContent"></ng-template>
        </div>
    </div>
    `
})
export class NzListItemMetaComponent {

    @HostBinding('class.ant-list-item-meta')
    _nzListItemMeta = true;

    avatar = false;
    _avatar = '';
    _avatarTpl: TemplateRef<any>;
    @Input()
    set nzAvatar(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._avatarTpl = value;
        else
            this._avatar = value;

        this.avatar = !!value;
    }

    title = false;
    _title = '';
    _titleTpl: TemplateRef<any>;
    @Input()
    set nzTitle(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._titleTpl = value;
        else
            this._title = value;

        this.title = !!value;
    }

    desc = false;
    _desc = '';
    _descTpl: TemplateRef<any>;
    @Input()
    set nzDescription(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._descTpl = value;
        else
            this._desc = value;

        this.desc = !!value;
    }

}
