import { CommandEnum } from '@mint-editor/core';
import { ToolbarItem } from './type';

export const defaultToolbars: ToolbarItem[] = [
    {
        name: 'undo',
        cmd: CommandEnum.UNDO,
        disabled: false,
        className: 'icon-undo'
    }, {
        name: 'redo',
        cmd: CommandEnum.REDO,
        disabled: false,
        className: 'icon-redo'
    }, {
        name: 'bold',
        cmd: CommandEnum.BOLD,
        active: false,
        className: 'icon-bold'
    }, {
        name: 'italic',
        cmd: CommandEnum.ITALIC,
        active: false,
        className: 'icon-italic'
    }, {
        name: 'underline',
        cmd: CommandEnum.UNDERLINE,
        active: false,
        className: 'icon-underline'
    }, {
        name: 'strikethrough',
        cmd: CommandEnum.STRIKETHROUGH,
        active: false,
        className: 'icon-strikethrough'
    }, {
        name: 'link',
        cmd: CommandEnum.LINK,
        active: false,
        disabled: true,
        className: 'icon-link'
    }, {
        name: 'ollist',
        cmd: CommandEnum.OLIST,
        active: false,
        disabled: false,
        className: 'icon-ollist'
    }, {
        name: 'ullist',
        cmd: CommandEnum.ULIST,
        active: false,
        disabled: false,
        className: 'icon-ullist'
    },
];