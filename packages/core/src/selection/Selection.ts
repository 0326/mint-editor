/**
 * 编辑器选取控制类
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Range
 */

export interface SelectionProps {
    container: HTMLElement;
}

export class Selection {
    private range: Range | null;
    private body: HTMLElement;
    constructor(props: SelectionProps) {
        this.range = null;
        this.body = props.container;
        document.addEventListener('selectionchange', this.handleSelectionChange);
    }

    private handleSelectionChange(e) {
        const selection = window.getSelection();

        if (!selection) {
            return;
        }

        const { anchorNode, focusNode } = selection;

        if (!anchorNode || !focusNode) {
            return;
        }

        if (
            !this.body.contains(anchorNode) ||
            !this.body.contains(focusNode)
        ) {
            return;
        }

        this.range = selection.getRangeAt(0);
        console.log('handleSelectionChange', selection, this.range);
    }

    public setSelection(range?: Range) {
        const selection = window.getSelection();
        if (!selection) {
            return;
        }

        selection.removeAllRanges();

        if (range) {
            this.range = range;
        }

        if (this.range) {
            selection.addRange(this.range);
        }
    }

    destroy() {
        document.removeEventListener('selectionchange', this.handleSelectionChange);
    }
}
