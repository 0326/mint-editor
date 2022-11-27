import { CommandEnum } from "@mint-editor/core";
export interface ToolbarItem {
    name: string;
    cmd: CommandEnum;
    active?: boolean;
    disabled?: boolean;
    className: string;
};
