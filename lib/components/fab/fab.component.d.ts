import { OnInit } from '@angular/core';
export declare class FabComponent implements OnInit {
    /**
     * any valid prime-ng icon name
     */
    icon: string;
    size: string;
    iconSize: string;
    color: 'primary' | 'secondary' | string;
    raised: boolean;
    constructor();
    ngOnInit(): void;
}
