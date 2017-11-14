import { Component, Input, ContentChild, TemplateRef, HostBinding } from '@angular/core';

@Component({
    selector: 'nz-card-meta',
    template: `
    <div class="ant-card-meta-content">
        <div *ngIf="avatar" class="ant-card-meta-avatar">
            <ng-container *ngIf="_avatar; else _avatarTpl"><nz-avatar [nzSrc]="_avatar"></nz-avatar></ng-container>
        </div>
        <div *ngIf="title || desc" class="ant-card-meta-detail">
            <div *ngIf="title" class="ant-card-meta-title">
                <ng-container *ngIf="_title; else _titleTpl">{{ _title }}</ng-container>
            </div>
            <div *ngIf="desc" class="ant-card-meta-description">
                <ng-container *ngIf="_desc; else _descTpl">{{ _desc }}</ng-container>
            </div>
        </div>
    </div>
    `
})
export class NzCardMetaComponent {

    @HostBinding('class.ant-card-meta')
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
