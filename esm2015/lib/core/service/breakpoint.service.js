import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
const MOBILE_LANDSCAPE = 812;
const MOBILE_PORTRAIT = 812;
export class BreakpointService {
    constructor(observer) {
        this.observer = observer;
    }
    mobile() {
        return this.observer.observe([`(max-width: ${MOBILE_LANDSCAPE}px)`]);
    }
    mobilePortrait() {
        return this.observer.observe([`(max-width: ${MOBILE_PORTRAIT}px)`]);
    }
    customMaxWidth(pixels) {
        return this.observer.observe([`(max-width: ${pixels}px)`]);
    }
}
BreakpointService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BreakpointService_Factory() { return new BreakpointService(i0.ɵɵinject(i1.BreakpointObserver)); }, token: BreakpointService, providedIn: "root" });
BreakpointService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
BreakpointService.ctorParameters = () => [
    { type: BreakpointObserver }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZy11aS9zcmMvbGliL2NvcmUvc2VydmljZS9icmVha3BvaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQW1CLE1BQU0scUJBQXFCLENBQUM7OztBQUcxRSxNQUFNLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztBQUM3QixNQUFNLGVBQWUsR0FBRyxHQUFHLENBQUM7QUFLNUIsTUFBTSxPQUFPLGlCQUFpQjtJQUU1QixZQUNVLFFBQTRCO1FBQTVCLGFBQVEsR0FBUixRQUFRLENBQW9CO0lBRXRDLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGVBQWUsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxlQUFlLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFjO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7O1lBcEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBUlEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludE9ic2VydmVyLCBCcmVha3BvaW50U3RhdGUgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuY29uc3QgTU9CSUxFX0xBTkRTQ0FQRSA9IDgxMjtcbmNvbnN0IE1PQklMRV9QT1JUUkFJVCA9IDgxMjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWtwb2ludFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb2JzZXJ2ZXI6IEJyZWFrcG9pbnRPYnNlcnZlclxuICApIHtcbiAgfVxuXG4gIG1vYmlsZSgpOiBPYnNlcnZhYmxlPEJyZWFrcG9pbnRTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLm9ic2VydmVyLm9ic2VydmUoW2AobWF4LXdpZHRoOiAke01PQklMRV9MQU5EU0NBUEV9cHgpYF0pO1xuICB9XG5cbiAgbW9iaWxlUG9ydHJhaXQoKTogT2JzZXJ2YWJsZTxCcmVha3BvaW50U3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5vYnNlcnZlci5vYnNlcnZlKFtgKG1heC13aWR0aDogJHtNT0JJTEVfUE9SVFJBSVR9cHgpYF0pO1xuICB9XG5cbiAgY3VzdG9tTWF4V2lkdGgocGl4ZWxzOiBudW1iZXIpOiBPYnNlcnZhYmxlPEJyZWFrcG9pbnRTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLm9ic2VydmVyLm9ic2VydmUoW2AobWF4LXdpZHRoOiAke3BpeGVsc31weClgXSk7XG4gIH1cblxufVxuIl19