import { Component, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
export class NavComponent {
    constructor() {
        this.isSidebarOpen = false;
        this.position = 'left';
        this._sideBarSize = window.innerWidth > 812 ? '300px' : '200px';
    }
    get sideBarSize() {
        return this._sideBarSize;
    }
    set sideBarSize(value) {
        this._sideBarSize = value;
        this.defaultSidebarWith = value;
    }
    ngOnInit() {
        this.resizeObservable$ = fromEvent(window, 'resize');
        this.resizeSubscription$ = this.resizeObservable$.pipe(debounceTime(1000), distinctUntilChanged(), tap(evt => {
            this._sideBarSize = evt.target['innerWidth'] < 812 ?
                '200px' : this.defaultSidebarWith || '300px';
        })).subscribe();
    }
    ngOnDestroy() {
        this.resizeSubscription$.unsubscribe();
    }
    toggle() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }
    get sidebarWidth() {
        if (this.position === 'bottom') {
            return '100%';
        }
        return this.isSidebarOpen ? this.sideBarSize : '0';
    }
    get sidebarHeight() {
        if (this.position === 'left') {
            return '100%';
        }
        return this.isSidebarOpen ? this.sideBarSize : '0';
    }
    get sidebarMargin() {
        if (this.position === 'bottom') {
            return '0';
        }
        return this.isSidebarOpen ? this.sideBarSize : '0';
    }
    onOverlayClick() {
        this.toggle();
    }
}
NavComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-nav',
                template: "<div class=\"sidenav-container\">\n  <div class=\"sidenav\"\n       [style]=\"{'width': sidebarWidth,\n       'height': sidebarHeight,\n       'top': position==='left'?'0':null,'bottom':position==='bottom'?'0':null}\">\n    <ng-content select=\"[sidenav]\"></ng-content>\n  </div>\n  <div class=\"sidenav-overlay\" *ngIf=\"isSidebarOpen\"\n       (click)=\"onOverlayClick()\"></div>\n  <div class=\"sidenav-content\" [class.disabled]=\"isSidebarOpen\"\n       [style]=\"{'margin-left': sidebarMargin}\">\n    <ng-content select=\"[content]\"></ng-content>\n  </div>\n</div>\n",
                styles: [".sidenav-container{height:100%;width:100%;display:flex;position:relative}.sidenav-container .sidenav{position:fixed;left:0;z-index:2;overflow-x:hidden;transition:.5s;box-shadow:0 2px 5px 0 rgba(0,0,0,.3)}.sidenav-container .sidenav-content{height:100%;flex:1;display:flex;flex-direction:column;transition:.5s}.sidenav-container .sidenav-content.disabled{overflow:hidden;pointer-events:none}.sidenav-container .sidenav-overlay{-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);position:absolute;top:0;z-index:1;height:100%;width:100%}"]
            },] }
];
NavComponent.propDecorators = {
    position: [{ type: Input }],
    sideBarSize: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ctdWkvc3JjL2xpYi9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3pFLE1BQU0sT0FBTyxZQUFZO0lBTHpCO1FBU0Usa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDYixhQUFRLEdBQXNCLE1BQU0sQ0FBQztRQVd0QyxpQkFBWSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQWdEckUsQ0FBQztJQXpEQyxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQWEsV0FBVyxDQUFDLEtBQWE7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBS0QsUUFBUTtRQUNOLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUNwRCxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQ2xCLG9CQUFvQixFQUFFLEVBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNSLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDbEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLElBQUksT0FBTyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUNILENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQyxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUM5QixPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDckQsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7WUFDNUIsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQzlCLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNyRCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2dCQUNqQiwya0JBQW1DOzthQUVwQzs7O3VCQU1FLEtBQUs7MEJBTUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnLW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXYuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcmVzaXplT2JzZXJ2YWJsZSQ6IE9ic2VydmFibGU8RXZlbnQ+O1xuICByZXNpemVTdWJzY3JpcHRpb24kOiBTdWJzY3JpcHRpb247XG4gIGlzU2lkZWJhck9wZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgcG9zaXRpb246ICdsZWZ0JyB8ICdib3R0b20nID0gJ2xlZnQnO1xuXG4gIGdldCBzaWRlQmFyU2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaWRlQmFyU2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBzaWRlQmFyU2l6ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2lkZUJhclNpemUgPSB2YWx1ZTtcbiAgICB0aGlzLmRlZmF1bHRTaWRlYmFyV2l0aCA9IHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2lkZUJhclNpemUgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDgxMiA/ICczMDBweCcgOiAnMjAwcHgnO1xuICBwcml2YXRlIGRlZmF1bHRTaWRlYmFyV2l0aDtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmFibGUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpO1xuICAgIHRoaXMucmVzaXplU3Vic2NyaXB0aW9uJCA9IHRoaXMucmVzaXplT2JzZXJ2YWJsZSQucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgxMDAwKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICB0YXAoZXZ0ID0+IHtcbiAgICAgICAgdGhpcy5fc2lkZUJhclNpemUgPSBldnQudGFyZ2V0Wydpbm5lcldpZHRoJ10gPCA4MTIgP1xuICAgICAgICAgICcyMDBweCcgOiB0aGlzLmRlZmF1bHRTaWRlYmFyV2l0aCB8fCAnMzAwcHgnO1xuICAgICAgfSlcbiAgICApLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZXNpemVTdWJzY3JpcHRpb24kLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5pc1NpZGViYXJPcGVuID0gIXRoaXMuaXNTaWRlYmFyT3BlbjtcbiAgfVxuXG4gIGdldCBzaWRlYmFyV2lkdGgoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHJldHVybiAnMTAwJSc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzU2lkZWJhck9wZW4gPyB0aGlzLnNpZGVCYXJTaXplIDogJzAnO1xuICB9XG5cbiAgZ2V0IHNpZGViYXJIZWlnaHQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICByZXR1cm4gJzEwMCUnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pc1NpZGViYXJPcGVuID8gdGhpcy5zaWRlQmFyU2l6ZSA6ICcwJztcbiAgfVxuXG4gIGdldCBzaWRlYmFyTWFyZ2luKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdib3R0b20nKSB7XG4gICAgICByZXR1cm4gJzAnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pc1NpZGViYXJPcGVuID8gdGhpcy5zaWRlQmFyU2l6ZSA6ICcwJztcbiAgfVxuXG4gIG9uT3ZlcmxheUNsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlKCk7XG4gIH1cblxufVxuIl19