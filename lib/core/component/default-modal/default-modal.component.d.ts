import { IAction, IDefaultModalInjectionData } from '../../model/modal';
import { OverlayRef } from '@angular/cdk/overlay';
export declare class DefaultModalComponent {
    data: IDefaultModalInjectionData;
    title: string;
    primaryText: string;
    secondaryText: string;
    htmlContent: string;
    actions: IAction[];
    overlayRef: OverlayRef;
    constructor(data: IDefaultModalInjectionData);
    emitAction(action: IAction): void;
}
