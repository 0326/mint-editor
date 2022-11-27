import { Selection } from '../selection';

export interface EditorProps {
    container: HTMLElement;
    disabled?: boolean;
    onRangeChange?: (r: Range) => void;
}

// https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand
export enum CommandEnum {
    REDO = 'redo', // 重做被撤销的操作
    UNDO = 'undo', // 撤销最近执行的命令
    BOLD = 'bold', // 开启或关闭选中文字或插入点的粗体字效果
    ITALIC = 'italic', // 在光标插入点开启或关闭斜体字
    UNDERLINE = 'underline', // 在光标插入点开启或关闭下划线
    STRIKETHROUGH = 'strikeThrough', // 在光标插入点开启或关闭删除线
    LINK = 'createLink', // 将选中内容创建为一个锚链接。这个命令需要一个 hrefURI 字符串作为参数值传入
    UNLINK = 'unlink', // 去除所选的锚链接的<a>标签
    OLIST = 'insertOrderedList', // 插入有序列表
    ULIST = 'insertUnorderedList', // 插入无需列表
    COPY = 'copy', // 复制
}

export class Editor {
    public disabled: boolean;
    private container: HTMLElement;
    private selection: Selection;
    constructor(props: EditorProps) {
        this.disabled = props.disabled === true;
        this.container = props.container;
        this.selection = new Selection({
            container: this.container,
            onRangeChange: props.onRangeChange,
        });
        this.initContainer();
    }

    private initContainer() {
        if (!this.container) {
            throw new Error('ParamsError: missing container');
        }
        this.container.setAttribute('contenteditable', String(!this.disabled));
    }

    public getContent() {
        return this.container.innerHTML;
    }

    private setContent(html: string) {
        this.container.innerHTML = html;
    }

    public isFocus() {
        return document.activeElement === this.container || this.container.contains(document.activeElement);
    }

    // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand
    public execCommand(commandName: CommandEnum) {
        // if (!this.isFocus()) {
        //     this.selection?.setSelection();
        // }
        document.execCommand(commandName, false, '');
    }

    public destroy() {
        this.selection.destroy();
    }
}
