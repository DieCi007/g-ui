import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
export declare class BreakpointService {
    private observer;
    constructor(observer: BreakpointObserver);
    mobile(): Observable<BreakpointState>;
    mobilePortrait(): Observable<BreakpointState>;
    customMaxWidth(pixels: number): Observable<BreakpointState>;
}
