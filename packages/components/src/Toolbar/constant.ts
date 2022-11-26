
import { ToolbarItem } from './type';

export const defaultToolbars: ToolbarItem[] = [
    {
        name: 'undo',
        disabled: true,
        className: 'icon-undo'
    }, {
        name: 'redo',
        disabled: true,
        className: 'icon-redo'
    }, {
        name: 'bold',
        active: false,
        className: 'icon-bold'
    }, {
        name: 'italic',
        active: false,
        className: 'icon-italic'
    }, {
        name: 'underline',
        active: false,
        className: 'icon-underline'
    }, {
        name: 'strikethrough',
        active: false,
        className: 'icon-strikethrough'
    }, {
        name: 'link',
        active: false,
        disabled: true,
        className: 'icon-link'
    }, {
        name: 'ollist',
        active: false,
        disabled: true,
        className: 'icon-ollist'
    }, {
        name: 'ullist',
        active: false,
        disabled: true,
        className: 'icon-ullist'
    },
];