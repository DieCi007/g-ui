import { Component, Input } from '@angular/core';
export class InputFieldComponent {
    constructor() {
        this.autofocus = false;
        this.type = 'text';
        this.font = 'large';
        this.width = '100%';
    }
    isActive() {
        const val = this.control.value;
        return val !== null && val !== undefined && (val === 0 || !!val);
    }
    ;
    get control() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.controlName);
    }
}
InputFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-input-field',
                template: "<label class=\"input-control\" [style]=\"{width: width}\"\n       [ngClass]=\"{'mod-error': control.invalid && (control.dirty || control.touched)}\">\n  <input [ngClass]=\"{'active': isActive(), 'normal': font==='normal'}\"\n         [type]=\"type\" [formControl]=\"control\" [formGroup]=\"form\" [style]=\"{textAlign: textAlign && 'center'}\"\n         [autofocus]=\"autofocus\" [autocomplete]=\"autocomplete\"/>\n  <span>{{label}}</span>\n  <label class=\"disabled-view\" [ngClass]=\"{'normal': font==='normal'}\">\n    {{control.value}}</label>\n  <label class=\"error-border\"></label>\n  <ng-container *ngIf=\"control.invalid && (control.dirty || control.touched)\">\n    <label class=\"error-label\" *ngIf=\"control.errors?.required\">Campo obbligatorio</label>\n  </ng-container>\n</label>\n",
                styles: [".input-control{position:relative;margin:.8rem 0 0 .5rem;display:block}.input-control .error-label{display:block;font-size:.9rem;color:#d0021b;margin-top:5px;position:absolute}.input-control span{display:block;text-transform:uppercase;color:#000;position:absolute;transition:all .1s linear}.input-control input~span{top:.7rem}.input-control input.normal~span{top:.5rem}.input-control .disabled-view{display:none;line-break:loose}.input-control .disabled-view,.input-control input{font-family:Lato,serif;font-weight:500;background:transparent;font-size:1.4rem;border:none;border-bottom:1px solid #000;padding:5px 0 2px;color:#555;width:100%}.input-control .disabled-view.normal,.input-control input.normal{font-size:1.1rem}.input-control .disabled-view:disabled,.input-control input:disabled{display:none}.input-control .disabled-view:active,.input-control input:active{border-color:#c8a415}.input-control .disabled-view:focus-visible,.input-control input:focus-visible{outline:none;border-color:#c8a415}.input-control input:disabled~.disabled-view{display:block;border-bottom:none}.input-control input.active~span,.input-control input:focus~span{transform:translateY(-1.5rem)}.input-control input.normal.active~span,.input-control input.normal:focus~span{transform:translateY(-1.3rem)}.input-control .error-border{display:block;width:0;height:0;background-color:#d0021b;transition:width .5s}.input-control.mod-error input{border-bottom:1px solid #d0021b}.input-control.mod-error .error-border{width:100%;height:3px}@media only screen and (min-width:320px) and (max-width:812px){.input-control span{font-size:.9rem}.input-control .disabled-view,.input-control input{font-size:1.1rem}}"]
            },] }
];
InputFieldComponent.propDecorators = {
    label: [{ type: Input }],
    form: [{ type: Input }],
    controlName: [{ type: Input }],
    autofocus: [{ type: Input }],
    autocomplete: [{ type: Input }],
    type: [{ type: Input }],
    font: [{ type: Input }],
    width: [{ type: Input }],
    textAlign: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZy11aS9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQtZmllbGQvaW5wdXQtZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWpELE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFTVyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLFNBQUksR0FBd0IsTUFBTSxDQUFDO1FBQ25DLFNBQUksR0FBdUIsT0FBTyxDQUFDO1FBQ25DLFVBQUssR0FBRyxNQUFNLENBQUM7SUFZMUIsQ0FBQztJQVRDLFFBQVE7UUFDTixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMvQixPQUFPLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFBQSxDQUFDO0lBRUYsSUFBSSxPQUFPOztRQUNULE9BQU8sTUFBQSxJQUFJLENBQUMsSUFBSSwwQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBZ0IsQ0FBQztJQUN6RCxDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwweUJBQTJDOzthQUU1Qzs7O29CQUVFLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZy1pbnB1dC1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWZpZWxkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRGaWVsZENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgY29udHJvbE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgYXV0b2ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZTogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiAndGV4dCcgfCAncGFzc3dvcmQnID0gJ3RleHQnO1xuICBASW5wdXQoKSBmb250OiAnbm9ybWFsJyB8ICdsYXJnZScgPSAnbGFyZ2UnO1xuICBASW5wdXQoKSB3aWR0aCA9ICcxMDAlJztcbiAgQElucHV0KCkgdGV4dEFsaWduOiBzdHJpbmcgfCAnY2VudGVyJztcblxuICBpc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLmNvbnRyb2wudmFsdWU7XG4gICAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB2YWwgIT09IHVuZGVmaW5lZCAmJiAodmFsID09PSAwIHx8ICEhdmFsKTtcbiAgfTtcblxuICBnZXQgY29udHJvbCgpOiBGb3JtQ29udHJvbCB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybT8uZ2V0KHRoaXMuY29udHJvbE5hbWUpIGFzIEZvcm1Db250cm9sO1xuICB9XG5cbn1cbiJdfQ==