import { OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
export declare class NavComponent implements OnInit, OnDestroy {
    resizeObservable$: Observable<Event>;
    resizeSubscription$: Subscription;
    isSidebarOpen: boolean;
    position: 'left' | 'bottom';
    get sideBarSize(): string;
    set sideBarSize(value: string);
    private _sideBarSize;
    private defaultSidebarWith;
    ngOnInit(): void;
    ngOnDestroy(): void;
    toggle(): void;
    get sidebarWidth(): string;
    get sidebarHeight(): string;
    get sidebarMargin(): string;
    onOverlayClick(): void;
}
