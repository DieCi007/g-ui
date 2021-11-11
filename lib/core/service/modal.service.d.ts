import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { IAction, IDefaultModalData, IErrorResponse, IModalData, IModalOptions, IModalRef } from '../model/modal';
export declare class ModalService {
    private overlay;
    private overlayReference;
    contactMail: string;
    constructor(overlay: Overlay);
    createFromComponent<T>(component: ComponentType<T>, props: IModalData, onBackdropClick?: () => void, options?: IModalOptions, closeAll?: boolean): IModalRef<T>;
    openDefaultModal(props: IDefaultModalData, onBackdropClick?: () => void, options?: IModalOptions, closeAll?: boolean): IAction[];
    handleError(error: IErrorResponse): IAction[];
    private closeModal;
    private closeAllModals;
}
