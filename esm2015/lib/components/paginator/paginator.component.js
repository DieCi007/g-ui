import { Component, Input, Output, EventEmitter } from '@angular/core';
export class PaginatorComponent {
    constructor() {
        this.selectedPage = 0;
        this.totalPages = 1;
        this.sizeOptions = [10, 25, 50];
        this.selectedSize = 10;
        this.hideLabel = false;
        this.perPageLabel = 'Per page';
        this.currentPageLabel = 'Current page';
        this.valueChange = new EventEmitter();
    }
    onPageChange(selectedPage) {
        if (this.selectedPage !== selectedPage) {
            this.valueChange.emit({
                size: this.selectedSize,
                page: selectedPage
            });
        }
    }
    onPageSizeChange(selectedSize) {
        if (this.selectedSize !== selectedSize) {
            this.valueChange.emit({
                size: selectedSize,
                page: 0
            });
        }
    }
    onFirstClick() {
        if (this.selectedPage > 0) {
            this.onPageChange(0);
        }
    }
    onBackClick() {
        if (this.selectedPage > 0) {
            this.onPageChange(this.selectedPage - 1);
        }
    }
    onNextClick() {
        if (this.selectedPage + 1 < this.totalPages) {
            this.onPageChange(this.selectedPage + 1);
        }
    }
    onLastClick() {
        if (this.selectedPage + 1 < this.totalPages) {
            this.onPageChange(this.totalPages - 1);
        }
    }
}
PaginatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-paginator',
                template: "<div class=\"container\">\n  <div class=\"page-status-container\">\n    <span *ngIf=\"!hideLabel\">{{currentPageLabel}}: </span>\n    <div class=\"pagination-info\" [ngClass]=\"selectedPage>0?'enabled':'disabled'\"\n         (click)=\"onFirstClick()\">\n      <i class=\"pi pi-angle-double-left\"></i>\n    </div>\n    <div class=\"pagination-info\" [ngClass]=\"selectedPage>0?'enabled':'disabled'\"\n         (click)=\"onBackClick()\">\n      <i class=\"pi pi-angle-left\"></i>\n    </div>\n    <div *ngIf=\"selectedPage>0\" class=\"pagination-info enabled\"\n         (click)=\"onPageChange(selectedPage-1)\">{{selectedPage}}</div>\n    <div class=\"pagination-info enabled selected\">{{selectedPage + 1}}</div>\n    <div *ngIf=\"selectedPage+1<totalPages\" class=\"pagination-info enabled\"\n         (click)=\"onPageChange(selectedPage+1)\">{{selectedPage + 2}}</div>\n    <div class=\"pagination-info\" [ngClass]=\"selectedPage+1<totalPages?'enabled':'disabled'\"\n         (click)=\"onNextClick()\">\n      <i class=\"pi pi-angle-right\"></i>\n    </div>\n    <div class=\"pagination-info\" [ngClass]=\"selectedPage+1<totalPages?'enabled':'disabled'\"\n         (click)=\"onLastClick()\">\n      <i class=\"pi pi-angle-double-right\"></i>\n    </div>\n  </div>\n  <div class=\"per-page-container\">\n    <span>{{perPageLabel}}: </span>\n    <div *ngFor=\"let size of sizeOptions\" class=\"pagination-info enabled\"\n         [class.selected]=\"size===selectedSize\" (click)=\"onPageSizeChange(size)\">{{size}}</div>\n  </div>\n</div>\n",
                styles: [".container{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}.container .page-status-container,.container .per-page-container{display:flex;align-items:center;justify-content:center;margin:0 .4rem}.container .page-status-container span,.container .per-page-container span{margin-right:.3rem}.container .pagination-info{height:2rem;width:2rem;border:1px solid rgba(0,0,0,.18);border-radius:6px;display:flex;align-items:center;justify-content:center;background-color:#fafafa;margin:0 .1rem;box-shadow:0 0 5px 1px rgba(0,0,0,.18)}.container .pagination-info i{font-size:1.3rem}.container .pagination-info.enabled{cursor:pointer}.container .pagination-info.enabled:not(.selected):hover{background-color:rgba(255,213,79,.5019607843137255);transition:all .3s ease}.container .pagination-info.enabled:not(.selected):hover:active{background-color:rgba(255,213,79,.18823529411764706);box-shadow:none}.container .pagination-info.disabled{background-color:#c7c7c7;cursor:not-allowed;color:#6d6d6d}.container .pagination-info.selected{background-color:#ffd54f}@media only screen and (min-width:320px) and (max-width:812px){.container .page-status-container{padding:.2rem 0}}"]
            },] }
];
PaginatorComponent.propDecorators = {
    selectedPage: [{ type: Input }],
    totalPages: [{ type: Input }],
    sizeOptions: [{ type: Input }],
    selectedSize: [{ type: Input }],
    hideLabel: [{ type: Input }],
    perPageLabel: [{ type: Input }],
    currentPageLabel: [{ type: Input }],
    valueChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ctdWkvc3JjL2xpYi9jb21wb25lbnRzL3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFZdkUsTUFBTSxPQUFPLGtCQUFrQjtJQUwvQjtRQU9XLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixnQkFBVyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsVUFBVSxDQUFDO1FBQzFCLHFCQUFnQixHQUFHLGNBQWMsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7SUEyQzFELENBQUM7SUF6Q0MsWUFBWSxDQUFDLFlBQW9CO1FBQy9CLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxZQUFZLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWTtnQkFDdkIsSUFBSSxFQUFFLFlBQVk7YUFDbkIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsWUFBb0I7UUFDbkMsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFlBQVksRUFBRTtZQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLElBQUksRUFBRSxDQUFDO2FBQ1IsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDOzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixpaERBQXlDOzthQUUxQzs7OzJCQUdFLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7MEJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VTdGF0dXMge1xuICBwYWdlOiBudW1iZXI7XG4gIHNpemU6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZy1wYWdpbmF0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBzZWxlY3RlZFBhZ2UgPSAwO1xuICBASW5wdXQoKSB0b3RhbFBhZ2VzID0gMTtcbiAgQElucHV0KCkgc2l6ZU9wdGlvbnM6IG51bWJlcltdID0gWzEwLCAyNSwgNTBdO1xuICBASW5wdXQoKSBzZWxlY3RlZFNpemUgPSAxMDtcbiAgQElucHV0KCkgaGlkZUxhYmVsID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBlclBhZ2VMYWJlbCA9ICdQZXIgcGFnZSc7XG4gIEBJbnB1dCgpIGN1cnJlbnRQYWdlTGFiZWwgPSAnQ3VycmVudCBwYWdlJztcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJUGFnZVN0YXR1cz4oKTtcblxuICBvblBhZ2VDaGFuZ2Uoc2VsZWN0ZWRQYWdlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBhZ2UgIT09IHNlbGVjdGVkUGFnZSkge1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHtcbiAgICAgICAgc2l6ZTogdGhpcy5zZWxlY3RlZFNpemUsXG4gICAgICAgIHBhZ2U6IHNlbGVjdGVkUGFnZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25QYWdlU2l6ZUNoYW5nZShzZWxlY3RlZFNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkU2l6ZSAhPT0gc2VsZWN0ZWRTaXplKSB7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoe1xuICAgICAgICBzaXplOiBzZWxlY3RlZFNpemUsXG4gICAgICAgIHBhZ2U6IDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRmlyc3RDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBhZ2UgPiAwKSB7XG4gICAgICB0aGlzLm9uUGFnZUNoYW5nZSgwKTtcbiAgICB9XG4gIH1cblxuICBvbkJhY2tDbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBhZ2UgPiAwKSB7XG4gICAgICB0aGlzLm9uUGFnZUNoYW5nZSh0aGlzLnNlbGVjdGVkUGFnZSAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIG9uTmV4dENsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkUGFnZSArIDEgPCB0aGlzLnRvdGFsUGFnZXMpIHtcbiAgICAgIHRoaXMub25QYWdlQ2hhbmdlKHRoaXMuc2VsZWN0ZWRQYWdlICsgMSk7XG4gICAgfVxuICB9XG5cbiAgb25MYXN0Q2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQYWdlICsgMSA8IHRoaXMudG90YWxQYWdlcykge1xuICAgICAgdGhpcy5vblBhZ2VDaGFuZ2UodGhpcy50b3RhbFBhZ2VzIC0gMSk7XG4gICAgfVxuICB9XG59XG4iXX0=