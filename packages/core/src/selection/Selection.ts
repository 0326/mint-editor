/**
 * 编辑器选取控制类
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Selection
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Range
 */

export interface SelectionProps {
    container: HTMLElement;
    onRangeChange?: (r: Range) => void;
}

export class Selection {
    private range: Range | null;
    private props: SelectionProps;
    constructor(props: SelectionProps) {
        this.range = null;
        this.props = props;
        document.addEventListener('selectionchange', this.handleSelectionChange);
    }

    private handleSelectionChange = () => {
        const selection = window.getSelection();
        if (!selection) {
            return;
        }

        const { anchorNode, focusNode } = selection;

        if (!anchorNode || !focusNode) {
            return;
        }

        if (
            !this.props.container?.contains(anchorNode) ||
            !this.props.container?.contains(focusNode)
        ) {
            return;
        }

        this.range = selection.getRangeAt(0);
        this.props.onRangeChange?.(this.range);
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
