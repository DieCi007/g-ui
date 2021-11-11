import { EventEmitter } from '@angular/core';
export declare class ModalComponent {
    borderRadius: string;
    height: string;
    width: string;
    maxWidth: string;
    resizable: boolean;
    visible: boolean;
    visibleChange: EventEmitter<boolean>;
    draggable: boolean;
    position: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    zIndex: number;
    appendToBody: boolean;
}
