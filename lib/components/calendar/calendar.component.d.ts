import { OnDestroy, OnInit } from '@angular/core';
import { BreakpointService } from '../../core/service/breakpoint.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
export declare class CalendarComponent implements OnInit, OnDestroy {
    private bp;
    form: FormGroup;
    controlName: string;
    label: string;
    isMobile: boolean;
    bpSubscription: Subscription;
    constructor(bp: BreakpointService);
    ngOnInit(): void;
    get control(): FormControl;
    ngOnDestroy(): void;
}
