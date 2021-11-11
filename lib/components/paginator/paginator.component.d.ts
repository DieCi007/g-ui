import { EventEmitter } from '@angular/core';
export interface IPageStatus {
    page: number;
    size: number;
}
export declare class PaginatorComponent {
    selectedPage: number;
    totalPages: number;
    sizeOptions: number[];
    selectedSize: number;
    hideLabel: boolean;
    perPageLabel: string;
    currentPageLabel: string;
    valueChange: EventEmitter<IPageStatus>;
    onPageChange(selectedPage: number): void;
    onPageSizeChange(selectedSize: number): void;
    onFirstClick(): void;
    onBackClick(): void;
    onNextClick(): void;
    onLastClick(): void;
}
