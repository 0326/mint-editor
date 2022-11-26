import { Selection } from '../selection';

export interface MEditorProps {
    container: HTMLElement;
    disabled?: boolean;
}

export enum CommandEnum {
    BOLD = 'bold',
    ITALIC = 'italic',
    UNDERLINE = 'underline',
}

export class MEditor {
    public container: HTMLElement;
    public disabled: boolean;
    public selection: Selection;
    constructor(props: MEditorProps) {
        this.container = props.container;
        this.disabled = props.disabled === true;
        this.selection = new Selection({
            container: this.container,
        });
        this.initContainer();
    }

    private initContainer() {
        if (!this.container) {
            throw new Error('ParamsError: missing container');
        }
        this.container.classList.add('mint-editor-container');
        this.container.setAttribute('contenteditable', String(!this.disabled));
    }

    public getContent() {
        return this.container.innerHTML;
    }

    public setContent(html: string) {
        this.container.innerHTML = html;
    }

    public isFocus() {
        return document.activeElement === this.container || this.container.contains(document.activeElement);
    }

    // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand
    public execCommand(commandName: CommandEnum, showUI?: boolean, value?: any) {
        if (!this.isFocus()) {
            this.selection?.setSelection();
        }
        document.execCommand(commandName, showUI, value);
    }
}
