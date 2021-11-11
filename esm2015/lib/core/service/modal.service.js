import { EventEmitter, Injectable, Injector } from '@angular/core';
import { GlobalPositionStrategy, Overlay } from '@angular/cdk/overlay';
import { tap } from 'rxjs/operators';
import { ComponentPortal } from '@angular/cdk/portal';
import { MODAL_DATA, ModalSize } from '../model/modal';
import { DefaultModalComponent } from '../component/default-modal/default-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class ModalService {
    constructor(overlay) {
        this.overlay = overlay;
        this.overlayReference = [];
    }
    createFromComponent(component, props, onBackdropClick, options = { hasBackdrop: true, size: ModalSize.AUTO }, closeAll = true) {
        var _a;
        if (closeAll) {
            this.closeAllModals();
        }
        const index = this.overlayReference.length;
        const positionStrategy = new GlobalPositionStrategy().centerHorizontally().centerVertically();
        const overlayRef = this.overlay.create({
            height: (options === null || options === void 0 ? void 0 : options.size) ? getModalSize(options.size).height : 300,
            width: (options === null || options === void 0 ? void 0 : options.size) ? getModalSize(options.size).width : 500,
            hasBackdrop: !!(options === null || options === void 0 ? void 0 : options.hasBackdrop),
            positionStrategy,
            panelClass: (_a = options === null || options === void 0 ? void 0 : options.panelClass) !== null && _a !== void 0 ? _a : '',
        });
        overlayRef.backdropClick().pipe(tap(() => {
            if (onBackdropClick) {
                return onBackdropClick();
            }
            this.closeModal(index);
        })).subscribe();
        const portal = new ComponentPortal(component, null, createInjector(Object.assign(props, { overlayRef })));
        const componentRef = overlayRef.attach(portal);
        this.overlayReference.push(overlayRef);
        return { overlayRef, componentRef };
    }
    openDefaultModal(props, onBackdropClick, options = { hasBackdrop: true, size: ModalSize.LARGE }, closeAll = true) {
        if (!props || !props.actions) {
            return null;
        }
        const actions = props.actions;
        actions.map(a => {
            a.click = new EventEmitter();
            return a;
        });
        this.createFromComponent(DefaultModalComponent, props, onBackdropClick, options, closeAll);
        return actions;
    }
    handleError(error) {
        return this.openDefaultModal({
            title: `Errore`,
            html: '<div style="font-size: 1.1rem; font-weight: 500; padding: .5rem; text-align: center">' +
                'Abbiamo incontrato un problema. Se l\'errore persiste ' +
                '<a href=mailto:"' + this.contactMail + '">contatta l\'amministratore</a> indicando l\'errore:</div>' +
                '<div style="text-align: center; ' +
                'letter-spacing: 1.2px; padding: 0 .5rem">' + error.error + ': ' + error.message + '</div>',
            actions: [{
                    buttonColor: 'secondary',
                    buttonLabel: 'Indietro',
                }]
        });
    }
    closeModal(index) {
        if (this.overlayReference[index]) {
            this.overlayReference[index].dispose();
        }
    }
    closeAllModals() {
        this.overlayReference.forEach(of => of.dispose());
    }
}
ModalService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.Overlay)); }, token: ModalService, providedIn: "root" });
ModalService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ModalService.ctorParameters = () => [
    { type: Overlay }
];
const getModalSize = (size) => {
    switch (size) {
        case ModalSize.SMALL:
            return { width: '30%', height: '30%' };
        case ModalSize.MEDIUM:
            return { width: '350px', height: 'auto' };
        case ModalSize.LARGE:
            return { width: '500px', height: 'auto' };
        case ModalSize.FULL:
            return { width: '100%', height: '100%' };
        case ModalSize.HALF:
            return { width: '50%', height: '50%' };
        case ModalSize.AUTO:
            return { width: 'auto', height: 'auto' };
        default:
            return { width: 300, height: 500 };
    }
};
const ɵ0 = getModalSize;
const createInjector = (props) => {
    const tokens = new WeakMap();
    tokens.set(MODAL_DATA, props);
    return Injector.create({
        providers: [{
                provide: MODAL_DATA,
                useValue: props
            }]
    });
};
const ɵ1 = createInjector;
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ctdWkvc3JjL2xpYi9jb3JlL3NlcnZpY2UvbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFpQixzQkFBc0IsRUFBRSxPQUFPLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBb0YsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pJLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7QUFLM0YsTUFBTSxPQUFPLFlBQVk7SUFJdkIsWUFBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUg1QixxQkFBZ0IsR0FBaUIsRUFBRSxDQUFDO0lBSTVDLENBQUM7SUFFRCxtQkFBbUIsQ0FBSSxTQUEyQixFQUFFLEtBQWlCLEVBQUUsZUFBNEIsRUFDNUUsVUFBeUIsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFDLEVBQUUsV0FBb0IsSUFBSTs7UUFDakgsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7UUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBRTNDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU5RixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNyQyxNQUFNLEVBQUUsQ0FBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRztZQUMvRCxLQUFLLEVBQUUsQ0FBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRztZQUM3RCxXQUFXLEVBQUUsQ0FBQyxFQUFDLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxXQUFXLENBQUE7WUFDbkMsZ0JBQWdCO1lBQ2hCLFVBQVUsUUFBRSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsVUFBVSxtQ0FBSSxFQUFFO1NBQ3RDLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQzdCLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxJQUFJLGVBQWUsRUFBRTtnQkFDbkIsT0FBTyxlQUFlLEVBQUUsQ0FBQzthQUMxQjtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQ0gsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVkLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBZSxDQUNoQyxTQUFTLEVBQ1QsSUFBSSxFQUNKLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFDLFVBQVUsRUFBQyxDQUFDLENBQUMsQ0FDbkQsQ0FBQztRQUNGLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV2QyxPQUFPLEVBQUMsVUFBVSxFQUFFLFlBQVksRUFBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUF3QixFQUFFLGVBQTRCLEVBQ3RELFVBQXlCLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBQyxFQUFFLFdBQW9CLElBQUk7UUFDNUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE1BQU0sT0FBTyxHQUFjLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNkLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztZQUN6QyxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNGLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBcUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDM0IsS0FBSyxFQUFFLFFBQVE7WUFDZixJQUFJLEVBQUUsdUZBQXVGO2dCQUMzRix3REFBd0Q7Z0JBQ3hELGtCQUFrQixHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsNkRBQTZEO2dCQUNyRyxrQ0FBa0M7Z0JBQ2xDLDJDQUEyQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsUUFBUTtZQUM3RixPQUFPLEVBQUUsQ0FBQztvQkFDUixXQUFXLEVBQUUsV0FBVztvQkFDeEIsV0FBVyxFQUFFLFVBQVU7aUJBQ3hCLENBQUM7U0FDSCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sVUFBVSxDQUFDLEtBQUs7UUFDdEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7WUFuRkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFSK0MsT0FBTzs7QUE0RnZELE1BQU0sWUFBWSxHQUFHLENBQUMsSUFBZSxFQUF1RCxFQUFFO0lBQzVGLFFBQVEsSUFBSSxFQUFFO1FBQ1osS0FBSyxTQUFTLENBQUMsS0FBSztZQUNsQixPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDdkMsS0FBSyxTQUFTLENBQUMsTUFBTTtZQUNuQixPQUFPLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7UUFDMUMsS0FBSyxTQUFTLENBQUMsS0FBSztZQUNsQixPQUFPLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7UUFDMUMsS0FBSyxTQUFTLENBQUMsSUFBSTtZQUNqQixPQUFPLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7UUFDekMsS0FBSyxTQUFTLENBQUMsSUFBSTtZQUNqQixPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDdkMsS0FBSyxTQUFTLENBQUMsSUFBSTtZQUNqQixPQUFPLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUM7UUFDekM7WUFDRSxPQUFPLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7S0FDcEM7QUFDSCxDQUFDLENBQUM7O0FBRUYsTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUFpQixFQUFZLEVBQUU7SUFDckQsTUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDckIsU0FBUyxFQUFFLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLFFBQVEsRUFBRSxLQUFLO2FBQ2hCLENBQUM7S0FDSCxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRUeXBlLCBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5LCBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBJQWN0aW9uLCBJRGVmYXVsdE1vZGFsRGF0YSwgSUVycm9yUmVzcG9uc2UsIElNb2RhbERhdGEsIElNb2RhbE9wdGlvbnMsIElNb2RhbFJlZiwgTU9EQUxfREFUQSwgTW9kYWxTaXplIH0gZnJvbSAnLi4vbW9kZWwvbW9kYWwnO1xuaW1wb3J0IHsgRGVmYXVsdE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50L2RlZmF1bHQtbW9kYWwvZGVmYXVsdC1tb2RhbC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuICBwcml2YXRlIG92ZXJsYXlSZWZlcmVuY2U6IE92ZXJsYXlSZWZbXSA9IFtdO1xuICBjb250YWN0TWFpbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSkge1xuICB9XG5cbiAgY3JlYXRlRnJvbUNvbXBvbmVudDxUPihjb21wb25lbnQ6IENvbXBvbmVudFR5cGU8VD4sIHByb3BzOiBJTW9kYWxEYXRhLCBvbkJhY2tkcm9wQ2xpY2s/OiAoKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IElNb2RhbE9wdGlvbnMgPSB7aGFzQmFja2Ryb3A6IHRydWUsIHNpemU6IE1vZGFsU2l6ZS5BVVRPfSwgY2xvc2VBbGw6IGJvb2xlYW4gPSB0cnVlKTogSU1vZGFsUmVmPFQ+IHtcbiAgICBpZiAoY2xvc2VBbGwpIHtcbiAgICAgIHRoaXMuY2xvc2VBbGxNb2RhbHMoKTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm92ZXJsYXlSZWZlcmVuY2UubGVuZ3RoO1xuXG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IG5ldyBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5KCkuY2VudGVySG9yaXpvbnRhbGx5KCkuY2VudGVyVmVydGljYWxseSgpO1xuXG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgaGVpZ2h0OiBvcHRpb25zPy5zaXplID8gZ2V0TW9kYWxTaXplKG9wdGlvbnMuc2l6ZSkuaGVpZ2h0IDogMzAwLFxuICAgICAgd2lkdGg6IG9wdGlvbnM/LnNpemUgPyBnZXRNb2RhbFNpemUob3B0aW9ucy5zaXplKS53aWR0aCA6IDUwMCxcbiAgICAgIGhhc0JhY2tkcm9wOiAhIW9wdGlvbnM/Lmhhc0JhY2tkcm9wLFxuICAgICAgcG9zaXRpb25TdHJhdGVneSxcbiAgICAgIHBhbmVsQ2xhc3M6IG9wdGlvbnM/LnBhbmVsQ2xhc3MgPz8gJycsXG4gICAgfSk7XG4gICAgb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkucGlwZShcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIGlmIChvbkJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgICByZXR1cm4gb25CYWNrZHJvcENsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKGluZGV4KTtcbiAgICAgIH0pXG4gICAgKS5zdWJzY3JpYmUoKTtcblxuICAgIGNvbnN0IHBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoXG4gICAgICBjb21wb25lbnQsXG4gICAgICBudWxsLFxuICAgICAgY3JlYXRlSW5qZWN0b3IoT2JqZWN0LmFzc2lnbihwcm9wcywge292ZXJsYXlSZWZ9KSlcbiAgICApO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IG92ZXJsYXlSZWYuYXR0YWNoKHBvcnRhbCk7XG4gICAgdGhpcy5vdmVybGF5UmVmZXJlbmNlLnB1c2gob3ZlcmxheVJlZik7XG5cbiAgICByZXR1cm4ge292ZXJsYXlSZWYsIGNvbXBvbmVudFJlZn07XG4gIH1cblxuICBvcGVuRGVmYXVsdE1vZGFsKHByb3BzOiBJRGVmYXVsdE1vZGFsRGF0YSwgb25CYWNrZHJvcENsaWNrPzogKCkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBJTW9kYWxPcHRpb25zID0ge2hhc0JhY2tkcm9wOiB0cnVlLCBzaXplOiBNb2RhbFNpemUuTEFSR0V9LCBjbG9zZUFsbDogYm9vbGVhbiA9IHRydWUpOiBJQWN0aW9uW10ge1xuICAgIGlmICghcHJvcHMgfHwgIXByb3BzLmFjdGlvbnMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBhY3Rpb25zOiBJQWN0aW9uW10gPSBwcm9wcy5hY3Rpb25zO1xuICAgIGFjdGlvbnMubWFwKGEgPT4ge1xuICAgICAgYS5jbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcbiAgICAgIHJldHVybiBhO1xuICAgIH0pO1xuICAgIHRoaXMuY3JlYXRlRnJvbUNvbXBvbmVudChEZWZhdWx0TW9kYWxDb21wb25lbnQsIHByb3BzLCBvbkJhY2tkcm9wQ2xpY2ssIG9wdGlvbnMsIGNsb3NlQWxsKTtcbiAgICByZXR1cm4gYWN0aW9ucztcbiAgfVxuXG4gIGhhbmRsZUVycm9yKGVycm9yOiBJRXJyb3JSZXNwb25zZSk6IElBY3Rpb25bXSB7XG4gICAgcmV0dXJuIHRoaXMub3BlbkRlZmF1bHRNb2RhbCh7XG4gICAgICB0aXRsZTogYEVycm9yZWAsXG4gICAgICBodG1sOiAnPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMS4xcmVtOyBmb250LXdlaWdodDogNTAwOyBwYWRkaW5nOiAuNXJlbTsgdGV4dC1hbGlnbjogY2VudGVyXCI+JyArXG4gICAgICAgICdBYmJpYW1vIGluY29udHJhdG8gdW4gcHJvYmxlbWEuIFNlIGxcXCdlcnJvcmUgcGVyc2lzdGUgJyArXG4gICAgICAgICc8YSBocmVmPW1haWx0bzpcIicgKyB0aGlzLmNvbnRhY3RNYWlsICsgJ1wiPmNvbnRhdHRhIGxcXCdhbW1pbmlzdHJhdG9yZTwvYT4gaW5kaWNhbmRvIGxcXCdlcnJvcmU6PC9kaXY+JyArXG4gICAgICAgICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyOyAnICtcbiAgICAgICAgJ2xldHRlci1zcGFjaW5nOiAxLjJweDsgcGFkZGluZzogMCAuNXJlbVwiPicgKyBlcnJvci5lcnJvciArICc6ICcgKyBlcnJvci5tZXNzYWdlICsgJzwvZGl2PicsXG4gICAgICBhY3Rpb25zOiBbe1xuICAgICAgICBidXR0b25Db2xvcjogJ3NlY29uZGFyeScsXG4gICAgICAgIGJ1dHRvbkxhYmVsOiAnSW5kaWV0cm8nLFxuICAgICAgfV1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VNb2RhbChpbmRleCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWZlcmVuY2VbaW5kZXhdKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWZlcmVuY2VbaW5kZXhdLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsb3NlQWxsTW9kYWxzKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheVJlZmVyZW5jZS5mb3JFYWNoKG9mID0+IG9mLmRpc3Bvc2UoKSk7XG4gIH1cbn1cblxuY29uc3QgZ2V0TW9kYWxTaXplID0gKHNpemU6IE1vZGFsU2l6ZSk6IHsgd2lkdGg6IHN0cmluZyB8IG51bWJlcjsgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXIgfSA9PiB7XG4gIHN3aXRjaCAoc2l6ZSkge1xuICAgIGNhc2UgTW9kYWxTaXplLlNNQUxMOlxuICAgICAgcmV0dXJuIHt3aWR0aDogJzMwJScsIGhlaWdodDogJzMwJSd9O1xuICAgIGNhc2UgTW9kYWxTaXplLk1FRElVTTpcbiAgICAgIHJldHVybiB7d2lkdGg6ICczNTBweCcsIGhlaWdodDogJ2F1dG8nfTtcbiAgICBjYXNlIE1vZGFsU2l6ZS5MQVJHRTpcbiAgICAgIHJldHVybiB7d2lkdGg6ICc1MDBweCcsIGhlaWdodDogJ2F1dG8nfTtcbiAgICBjYXNlIE1vZGFsU2l6ZS5GVUxMOlxuICAgICAgcmV0dXJuIHt3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJ307XG4gICAgY2FzZSBNb2RhbFNpemUuSEFMRjpcbiAgICAgIHJldHVybiB7d2lkdGg6ICc1MCUnLCBoZWlnaHQ6ICc1MCUnfTtcbiAgICBjYXNlIE1vZGFsU2l6ZS5BVVRPOlxuICAgICAgcmV0dXJuIHt3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6ICdhdXRvJ307XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7d2lkdGg6IDMwMCwgaGVpZ2h0OiA1MDB9O1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVJbmplY3RvciA9IChwcm9wczogSU1vZGFsRGF0YSk6IEluamVjdG9yID0+IHtcbiAgY29uc3QgdG9rZW5zID0gbmV3IFdlYWtNYXAoKTtcbiAgdG9rZW5zLnNldChNT0RBTF9EQVRBLCBwcm9wcyk7XG4gIHJldHVybiBJbmplY3Rvci5jcmVhdGUoe1xuICAgIHByb3ZpZGVyczogW3tcbiAgICAgIHByb3ZpZGU6IE1PREFMX0RBVEEsXG4gICAgICB1c2VWYWx1ZTogcHJvcHNcbiAgICB9XVxuICB9KTtcbn07XG5cblxuIl19