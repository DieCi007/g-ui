import { EventEmitter } from '@angular/core';
export declare class ButtonComponent {
    label: string;
    type: 'submit' | 'button';
    clicked: EventEmitter<void>;
    width: string;
    height: string;
    color: 'primary' | 'secondary' | 'danger' | string;
    disabled: boolean;
    onButtonClicked(event: MouseEvent): void;
}
