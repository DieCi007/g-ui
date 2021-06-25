import { Component, Input } from '@angular/core';
export class InputFieldComponent {
    get control() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
    }
}
InputFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-input-field',
                template: "<label class=\"input-control\"\n       [ngClass]=\"{'mod-error': control.invalid && (control.dirty || control.touched)}\">\n  <span>{{label}}</span>\n  <input [formControl]=\"control\" [formGroup]=\"form\"/>\n  <label class=\"disabled-view\">{{control.value}}</label>\n  <label class=\"error-border\"></label>\n  <ng-container *ngIf=\"control.invalid && (control.dirty || control.touched)\">\n    <label class=\"error-label\" *ngIf=\"control.errors?.required\">Campo obbligatorio</label>\n  </ng-container>\n</label>\n",
                styles: [".input-control{position:relative;margin:.5rem 0;display:block}.input-control .error-label{display:block;font-size:.9rem;color:#d0021b;margin-top:5px}.input-control span{display:block;text-transform:uppercase;color:#000}.input-control .disabled-view{display:none;line-break:loose}.input-control .disabled-view,.input-control input{font-family:Lato,serif;font-weight:500;background:transparent;font-size:1.4em;border:none;border-bottom:1px solid #000;padding:5px 25px 5px 0;color:#555}.input-control .disabled-view:disabled,.input-control input:disabled{display:none}.input-control .disabled-view:focus-visible,.input-control input:focus-visible{outline:none}.input-control input:disabled~.disabled-view{display:block;border-bottom:none}.input-control .error-border{display:block;width:0;height:3px;background-color:#d0021b;transition:width .5s}.input-control.mod-error input{border-bottom:1px solid #d0021b}.input-control.mod-error .error-border{width:100%}"]
            },] }
];
InputFieldComponent.propDecorators = {
    label: [{ type: Input }],
    form: [{ type: Input }],
    controlName: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZy11aS9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQtZmllbGQvaW5wdXQtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBUXpELE1BQU0sT0FBTyxtQkFBbUI7SUFLOUIsSUFBSSxPQUFPOztRQUNULE9BQU8sTUFBQSxJQUFJLENBQUMsSUFBSSwwQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBZ0IsQ0FBQztJQUN6RCxDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLGtoQkFBMkM7O2FBRTVDOzs7b0JBRUUsS0FBSzttQkFDTCxLQUFLOzBCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ctaW5wdXQtZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1maWVsZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIElucHV0RmllbGRDb21wb25lbnQge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGNvbnRyb2xOYW1lOiBzdHJpbmc7XG5cbiAgZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2wge1xuICAgIHJldHVybiB0aGlzLmZvcm0/LmdldCh0aGlzLmNvbnRyb2xOYW1lKSBhcyBGb3JtQ29udHJvbDtcbiAgfVxufVxuIl19