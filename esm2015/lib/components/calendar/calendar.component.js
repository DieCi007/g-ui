import { Component, Input } from '@angular/core';
import { BreakpointService } from '../../core/service/breakpoint.service';
import { tap } from 'rxjs/operators';
export class CalendarComponent {
    constructor(bp) {
        this.bp = bp;
        this.isMobile = false;
    }
    ngOnInit() {
        this.bpSubscription = this.bp.mobile().pipe(tap(r => this.isMobile = r.matches)).subscribe();
    }
    get control() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
    }
    ngOnDestroy() {
        this.bpSubscription.unsubscribe();
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-calendar',
                template: "<div class=\"container\">\n  <div class=\"label\">{{label}}</div>\n  <p-calendar [showIcon]=\"true\" dateFormat=\"dd/mm/yy\" [readonlyInput]=\"true\"\n              [formGroup]=\"form\" [formControl]=\"control\"\n              [touchUI]=\"isMobile\"></p-calendar>\n</div>\n",
                styles: [".container .label{text-transform:uppercase;color:#000}::ng-deep .p-calendar{width:10rem;border:none;border-bottom:1px solid #000}::ng-deep .p-calendar .p-inputtext{border:none;background:transparent;font-size:1.1rem;padding:0}::ng-deep .p-calendar .p-inputtext:enabled:focus{outline:none;border:none;border-bottom:1px solid #c8a415;box-shadow:none}::ng-deep .p-calendar .p-inputtext:active{border:none;border-bottom:1px solid #c8a415}::ng-deep .p-calendar .p-button{background:#ffd54f;padding:.25rem}@media only screen and (min-width:320px) and (max-width:812px){.container .label{font-size:.9rem}::ng-deep .p-calendar .p-button{padding:.08rem}}"]
            },] }
];
CalendarComponent.ctorParameters = () => [
    { type: BreakpointService }
];
CalendarComponent.propDecorators = {
    form: [{ type: Input }],
    controlName: [{ type: Input }],
    label: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZy11aS9zcmMvbGliL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUcxRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPckMsTUFBTSxPQUFPLGlCQUFpQjtJQVE1QixZQUNVLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBSi9CLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFNakIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUN6QyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FDcEMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsSUFBSSxPQUFPOztRQUNULE9BQU8sTUFBQSxJQUFJLENBQUMsSUFBSSwwQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBZ0IsQ0FBQztJQUN6RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsNlJBQXdDOzthQUV6Qzs7O1lBVFEsaUJBQWlCOzs7bUJBWXZCLEtBQUs7MEJBQ0wsS0FBSztvQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyZWFrcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlL2JyZWFrcG9pbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ctY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgY29udHJvbE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgaXNNb2JpbGUgPSBmYWxzZTtcbiAgYnBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGJwOiBCcmVha3BvaW50U2VydmljZVxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYnBTdWJzY3JpcHRpb24gPSB0aGlzLmJwLm1vYmlsZSgpLnBpcGUoXG4gICAgICB0YXAociA9PiB0aGlzLmlzTW9iaWxlID0gci5tYXRjaGVzKVxuICAgICkuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXQgY29udHJvbCgpOiBGb3JtQ29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybT8uZ2V0KHRoaXMuY29udHJvbE5hbWUpIGFzIEZvcm1Db250cm9sO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5icFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cbiJdfQ==