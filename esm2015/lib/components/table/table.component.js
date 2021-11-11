import { Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { SortType } from './model';
import { BreakpointService } from '../../core/service/breakpoint.service';
export class TableComponent {
    constructor(bp, fb) {
        this.bp = bp;
        this.fb = fb;
        this.noDataMessage = 'No items to display';
        this.cardMode = false;
        this.maxHeightPC = '50rem';
        this.maxHeightMobile = '38rem';
        this.changeAtPx = 812;
        this.buttonHeaderName = 'Actions';
        this.headerColor = 'primary';
        this.hoverColor = 'secondary';
        this.filterable = false;
        this.buttonClick = new EventEmitter();
        this.sortChange = new EventEmitter();
        this.filterChange = new EventEmitter();
        this.mobileStyle = false;
        this.filterForm = this.fb.group({
            filter: ['']
        });
    }
    ngOnInit() {
        this.bp$ = this.bp.customMaxWidth(this.changeAtPx).pipe(distinctUntilChanged(), tap(bp => bp.matches ? this.mobileStyle = true :
            this.mobileStyle = false)).subscribe();
        this.filterSubscription = this.filterForm.valueChanges.pipe(map(r => r.filter), debounceTime(400), distinctUntilChanged(), tap(f => {
            if (this.filterable) {
                this.filterChange.emit(f);
            }
        })).subscribe();
    }
    ngOnDestroy() {
        this.bp$.unsubscribe();
        this.filterSubscription.unsubscribe();
    }
    activateAccordion(accordion) {
        var _a;
        if (((_a = this.expandedHeaderData) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            if (accordion.style.display === 'table-cell') {
                accordion.style.display = 'none';
            }
            else {
                accordion.style.display = 'table-cell';
            }
        }
    }
    get allHeaderData() {
        let data = [...this.headerData];
        if (this.expandedHeaderData) {
            data = [...data, ...this.expandedHeaderData];
        }
        return data;
    }
    onButtonClick(event, id, el) {
        event.preventDefault();
        event.stopPropagation();
        this.buttonClick.emit({
            buttonId: id,
            rowData: el
        });
    }
    onSortChange(property) {
        var _a;
        if (property === ((_a = this.sort) === null || _a === void 0 ? void 0 : _a.field)) {
            return this.sortChange.emit({
                field: property,
                type: this.sort.type === SortType.ASC ? SortType.DESC : SortType.ASC
            });
        }
        this.sortChange.emit({
            field: property,
            type: SortType.ASC
        });
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'g-table',
                template: "<div class=\"container\" [class.card]=\"cardMode\">\n  <div class=\"table-container\" [ngStyle]=\"{height: mobileStyle ? maxHeightMobile : maxHeightPC}\">\n    <table *ngIf=\"!mobileStyle else custom\">\n      <thead>\n      <tr *ngIf=\"filterable\" [ngClass]=\"{primary: headerColor==='primary', secondary: headerColor==='secondary'}\"\n          [ngStyle]=\"{backgroundColor:!['primary','secondary'].includes(headerColor) && headerColor}\">\n        <td class=\"filter-container\" [colSpan]=\"headerData?.length + 1\">\n          <g-input-field font=\"normal\" width=\"20rem\"\n                         [form]=\"filterForm\" controlName=\"filter\" label=\"Cerca...\"></g-input-field>\n        </td>\n      </tr>\n      <tr [ngClass]=\"{primary: headerColor==='primary', secondary: headerColor==='secondary'}\"\n          [ngStyle]=\"{backgroundColor:!['primary','secondary'].includes(headerColor) && headerColor}\">\n        <th *ngFor=\"let data of headerData\" (click)=\"onSortChange(data.property)\">{{data.name}}\n          <i class=\"sort-element pi {{sort && data.property === sort.field &&\n          sort.type === 'ASC' ? 'pi-sort-up' : 'pi-sort-down'}}\"\n             [class.active]=\"data.property === sort?.field\"></i></th>\n        <th>{{buttonData?.length > 0 ? buttonHeaderName : ''}}</th>\n      </tr>\n      </thead>\n      <tbody>\n      <ng-container *ngFor=\"let element of data\">\n        <tr [ngClass]=\"{primary: hoverColor==='primary', secondary: hoverColor==='secondary'}\"\n            (click)=\"activateAccordion(accordion)\">\n          <ng-container *ngFor=\"let hd of headerData\">\n            <td *ngIf=\"!hd.render else render\" [class.emphasized]=\"hd.isBold\">\n              {{hd.dateFormat ? (element[hd.property] | date: hd.dateFormat) : element[hd.property]}}\n            </td>\n            <ng-template #render>\n              <td [class.emphasized]=\"hd.isBold\" [innerHTML]=\"hd.render(element) | trustHtml\"></td>\n            </ng-template>\n          </ng-container>\n          <td>\n            <ng-container *ngFor=\"let btn of buttonData\">\n              <g-button [color]=\"btn.color==='primary'?'primary':'secondary'\" *ngIf=\"btn.type === 'LABELED' else icon\"\n                        [label]=\"btn.label\" (click)=\"onButtonClick($event, btn.id, element)\"\n                        [pTooltip]=\"btn.tooltip\" [showDelay]=\"500\" class=\"action\"></g-button>\n              <ng-template #icon>\n                <i [ngClass]=\"{primary: btn.color==='primary', secondary: btn.color==='secondary',\n              danger: btn.color === 'danger'}\"\n                   [ngStyle]=\"{color: !['primary','secondary','danger'].includes(btn.color) && btn.color}\"\n                   class=\"action pi {{btn.icon}}\" (click)=\"onButtonClick($event, btn.id, element)\"\n                   [pTooltip]=\"btn.tooltip\" [showDelay]=\"500\"></i></ng-template>\n            </ng-container>\n          </td>\n        </tr>\n        <tr>\n          <td class=\"accordion-data\" #accordion [colSpan]=\"headerData?.length\">\n            <div *ngFor=\"let ehd of expandedHeaderData\">\n              <span class=\"header-value\">{{ehd.name}}:</span>\n              <span class=\"spacer\"></span>\n              <span\n                class=\"body-value\">{{ehd.dateFormat ? (element[ehd.property] | date: ehd.dateFormat) : element[ehd.property]}}</span>\n            </div>\n          </td>\n        </tr>\n      </ng-container>\n      <ng-container *ngIf=\"data?.length < 1\">\n        <tr>\n          <td [colSpan]=\"headerData?.length + (buttonData?.length || 0)\"\n              style=\"text-align: center\">{{noDataMessage}}</td>\n        </tr>\n      </ng-container>\n      </tbody>\n    </table>\n\n    <ng-template #custom>\n      <div class=\"custom-table-filter\" *ngIf=\"filterable\"\n           [ngClass]=\"{primary: headerColor==='primary', secondary: headerColor==='secondary'}\"\n           [ngStyle]=\"{backgroundColor:!['primary','secondary'].includes(headerColor) && headerColor}\">\n        <g-input-field font=\"large\" width=\"20rem\"\n                       [form]=\"filterForm\" controlName=\"filter\" label=\"Cerca...\"></g-input-field>\n      </div>\n      <div class=\"custom-table\">\n        <div *ngFor=\"let element of data; index as i\" class=\"custom-table-row\"\n             [class.odd-row]=\"i % 2 === 0\">\n          <div *ngFor=\"let hd of allHeaderData\">\n            <span class=\"header-value\">{{hd.name}}:</span>\n            <span class=\"spacer\"></span>\n            <span class=\"body-value\"\n                  [class.emphasized]=\"hd.isBold\">{{hd.dateFormat ? (element[hd.property] | date: hd.dateFormat) : element[hd.property]}}</span>\n          </div>\n          <div *ngIf=\"buttonData?.length>0\">\n            <span class=\"header-value\">{{buttonHeaderName}}:</span>\n            <span class=\"spacer\"></span>\n            <ng-container *ngFor=\"let btn of buttonData\">\n              <g-button [color]=\"btn.color==='primary'?'primary':'secondary'\" *ngIf=\"btn.type === 'LABELED' else icon\"\n                        [label]=\"btn.label\" (click)=\"onButtonClick($event, btn.id, element)\"\n                        [pTooltip]=\"btn.tooltip\" [showDelay]=\"500\" class=\"action\"></g-button>\n              <ng-template #icon>\n                <i [ngClass]=\"{primary: btn.color==='primary', secondary: btn.color==='secondary',\n              danger: btn.color === 'danger'}\"\n                   [ngStyle]=\"{color: !['primary','secondary','danger'].includes(btn.color) && btn.color}\"\n                   class=\"action pi {{btn.icon}}\" (click)=\"onButtonClick($event, btn.id, element)\"\n                   [pTooltip]=\"btn.tooltip\" [showDelay]=\"500\"></i></ng-template>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n      <ng-container *ngIf=\"data?.length < 1\">\n        <div style=\"text-align: center\">{{noDataMessage}}</div>\n      </ng-container>\n    </ng-template>\n  </div>\n</div>\n",
                styles: [":host{width:100%}.container{background-color:#f8f8ff;height:100%;width:100%}.container.card{box-shadow:0 2px 10px 0 rgba(0,0,0,.18);border-radius:20px;overflow:hidden}.container .table-container{overflow:auto;display:flex;flex-direction:column}.container .table-container table{border-collapse:collapse;position:relative;width:100%}.container .table-container table thead{position:sticky;top:0}.container .table-container table thead tr th{font-size:1.2rem;padding:.6rem .1rem;cursor:pointer}.container .table-container table thead tr th :not(.active).sort-element{display:none}.container .table-container table thead tr th:hover .sort-element{display:inline-block}.container .table-container table thead tr td.filter-container{padding:0 1rem}.container .table-container table thead tr.primary{background-color:#ffd54f}.container .table-container table thead tr.secondary{background-color:#4e342e;color:#fff}.container .table-container table tbody{border-left:5px solid transparent}.container .table-container table tbody tr{border-bottom:1px solid rgba(0,0,0,.1);cursor:pointer}.container .table-container table tbody tr.primary:hover{border-left:5px solid #ffd54f}.container .table-container table tbody tr.secondary:hover{border-left:5px solid #4e342e}.container .table-container table tbody tr td{padding:.5rem;text-align:center}.container .table-container table tbody tr td.emphasized{font-weight:500}.container .table-container table tbody tr td .action{margin:0 .3rem}.container .table-container table tbody tr td i{font-size:1.2rem}.container .table-container table tbody tr td i.primary{color:#ffd54f}.container .table-container table tbody tr td i.secondary{color:#4e342e}.container .table-container table tbody tr td i.danger{color:#d0021b}.container .table-container table tbody tr .accordion-data{display:none;-webkit-animation:fadeIn .8s;animation:fadeIn .8s;text-align:left}.container .table-container table tbody tr .accordion-data div .header-value{font-size:1.2rem;font-weight:700}.container .table-container table tbody tr .accordion-data div .spacer{padding-left:1rem}.container .table-container .custom-table-filter{width:100%}.container .table-container .custom-table-filter.primary{background-color:#ffd54f}.container .table-container .custom-table-filter.secondary{background-color:#4e342e}.container .table-container .custom-table{flex:1;overflow:auto}.container .table-container .custom-table .custom-table-row{padding:.5rem}.container .table-container .custom-table .custom-table-row.odd-row{background-color:rgba(255,213,79,.18823529411764706)}.container .table-container .custom-table .custom-table-row .header-value{font-size:1.2rem;font-weight:700}.container .table-container .custom-table .custom-table-row .spacer{padding-left:1rem}.container .table-container .custom-table .custom-table-row .body-value{font-size:1.1rem}.container .table-container .custom-table .custom-table-row .body-value.emphasized{font-weight:500}.container .table-container .custom-table .custom-table-row .action{margin:0 .3rem}.container .table-container .custom-table .custom-table-row i{font-size:1.2rem}.container .table-container .custom-table .custom-table-row i.primary{color:#ffd54f}.container .table-container .custom-table .custom-table-row i.secondary{color:#4e342e}.container .table-container .custom-table .custom-table-row i.danger{color:#d0021b}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"]
            },] }
];
TableComponent.ctorParameters = () => [
    { type: BreakpointService },
    { type: FormBuilder }
];
TableComponent.propDecorators = {
    headerData: [{ type: Input }],
    expandedHeaderData: [{ type: Input }],
    buttonData: [{ type: Input }],
    data: [{ type: Input }],
    noDataMessage: [{ type: Input }],
    cardMode: [{ type: Input }],
    maxHeightPC: [{ type: Input }],
    maxHeightMobile: [{ type: Input }],
    changeAtPx: [{ type: Input }],
    buttonHeaderName: [{ type: Input }],
    headerColor: [{ type: Input }],
    hoverColor: [{ type: Input }],
    sort: [{ type: Input }],
    filterable: [{ type: Input }],
    buttonClick: [{ type: Output }],
    sortChange: [{ type: Output }],
    filterChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZy11aS9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQW1FLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQVMxRSxNQUFNLE9BQU8sY0FBYztJQTJCekIsWUFDVSxFQUFxQixFQUNyQixFQUFlO1FBRGYsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQXZCaEIsa0JBQWEsR0FBRyxxQkFBcUIsQ0FBQztRQUN0QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsT0FBTyxDQUFDO1FBQzFCLGVBQVUsR0FBRyxHQUFHLENBQUM7UUFDakIscUJBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQzdCLGdCQUFXLEdBQXFDLFNBQVMsQ0FBQztRQUMxRCxlQUFVLEdBQTRCLFdBQVcsQ0FBQztRQUVsRCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFDdEQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDM0MsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxD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O1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbkIsS0FBSyxFQUFFLFFBQVE7WUFDZixJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUc7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBcEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIseTVMQUFxQzs7YUFFdEM7OztZQVJRLGlCQUFpQjtZQUZqQixXQUFXOzs7eUJBYWpCLEtBQUs7aUNBQ0wsS0FBSzt5QkFDTCxLQUFLO21CQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxNQUFNO3lCQUNOLE1BQU07MkJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJQnV0dG9uQ2xpY2tEYXRhLCBJU29ydEluZm8sIElUYWJsZUJ1dHRvbkRhdGEsIElUYWJsZUhlYWRlckRhdGEsIFNvcnRUeXBlIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBCcmVha3BvaW50U2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZS9icmVha3BvaW50LnNlcnZpY2UnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZy10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgaGVhZGVyRGF0YTogSVRhYmxlSGVhZGVyRGF0YVtdO1xuICBASW5wdXQoKSBleHBhbmRlZEhlYWRlckRhdGE6IElUYWJsZUhlYWRlckRhdGFbXTtcbiAgQElucHV0KCkgYnV0dG9uRGF0YTogSVRhYmxlQnV0dG9uRGF0YVtdO1xuICBASW5wdXQoKSBkYXRhOiBUW107XG4gIEBJbnB1dCgpIG5vRGF0YU1lc3NhZ2UgPSAnTm8gaXRlbXMgdG8gZGlzcGxheSc7XG4gIEBJbnB1dCgpIGNhcmRNb2RlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG1heEhlaWdodFBDID0gJzUwcmVtJztcbiAgQElucHV0KCkgbWF4SGVpZ2h0TW9iaWxlID0gJzM4cmVtJztcbiAgQElucHV0KCkgY2hhbmdlQXRQeCA9IDgxMjtcbiAgQElucHV0KCkgYnV0dG9uSGVhZGVyTmFtZSA9ICdBY3Rpb25zJztcbiAgQElucHV0KCkgaGVhZGVyQ29sb3I6ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgc3RyaW5nID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBob3ZlckNvbG9yOiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyA9ICdzZWNvbmRhcnknO1xuICBASW5wdXQoKSBzb3J0OiBJU29ydEluZm87XG4gIEBJbnB1dCgpIGZpbHRlcmFibGUgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGJ1dHRvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxJQnV0dG9uQ2xpY2tEYXRhPFQ+PigpO1xuICBAT3V0cHV0KCkgc29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SVNvcnRJbmZvPigpO1xuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgbW9iaWxlU3R5bGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBicCQ6IFN1YnNjcmlwdGlvbjtcbiAgZmlsdGVyRm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7XG4gICAgZmlsdGVyOiBbJyddXG4gIH0pO1xuICBwcml2YXRlIGZpbHRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYnA6IEJyZWFrcG9pbnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyXG4gICkge1xuICB9XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmJwJCA9IHRoaXMuYnAuY3VzdG9tTWF4V2lkdGgodGhpcy5jaGFuZ2VBdFB4KS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIHRhcChicCA9PiBicC5tYXRjaGVzID8gdGhpcy5tb2JpbGVTdHlsZSA9IHRydWUgOlxuICAgICAgICB0aGlzLm1vYmlsZVN0eWxlID0gZmFsc2UpLFxuICAgICkuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5maWx0ZXJTdWJzY3JpcHRpb24gPSB0aGlzLmZpbHRlckZvcm0udmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBtYXAociA9PiByLmZpbHRlciksXG4gICAgICBkZWJvdW5jZVRpbWUoNDAwKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICB0YXAoZiA9PiB7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlcmFibGUpIHtcbiAgICAgICAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KGYpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICkuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmJwJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuZmlsdGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBhY3RpdmF0ZUFjY29yZGlvbihhY2NvcmRpb246IEhUTUxUYWJsZURhdGFDZWxsRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cGFuZGVkSGVhZGVyRGF0YT8ubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKGFjY29yZGlvbi5zdHlsZS5kaXNwbGF5ID09PSAndGFibGUtY2VsbCcpIHtcbiAgICAgICAgYWNjb3JkaW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2NvcmRpb24uc3R5bGUuZGlzcGxheSA9ICd0YWJsZS1jZWxsJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgYWxsSGVhZGVyRGF0YSgpOiBJVGFibGVIZWFkZXJEYXRhW10ge1xuICAgIGxldCBkYXRhID0gWy4uLnRoaXMuaGVhZGVyRGF0YV07XG4gICAgaWYgKHRoaXMuZXhwYW5kZWRIZWFkZXJEYXRhKSB7XG4gICAgICBkYXRhID0gWy4uLmRhdGEsIC4uLnRoaXMuZXhwYW5kZWRIZWFkZXJEYXRhXTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBvbkJ1dHRvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBpZDogc3RyaW5nLCBlbDogVCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5idXR0b25DbGljay5lbWl0KHtcbiAgICAgIGJ1dHRvbklkOiBpZCxcbiAgICAgIHJvd0RhdGE6IGVsXG4gICAgfSk7XG4gIH1cblxuICBvblNvcnRDaGFuZ2UocHJvcGVydHk6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChwcm9wZXJ0eSA9PT0gdGhpcy5zb3J0Py5maWVsZCkge1xuICAgICAgcmV0dXJuIHRoaXMuc29ydENoYW5nZS5lbWl0KHtcbiAgICAgICAgZmllbGQ6IHByb3BlcnR5LFxuICAgICAgICB0eXBlOiB0aGlzLnNvcnQudHlwZSA9PT0gU29ydFR5cGUuQVNDID8gU29ydFR5cGUuREVTQyA6IFNvcnRUeXBlLkFTQ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc29ydENoYW5nZS5lbWl0KHtcbiAgICAgIGZpZWxkOiBwcm9wZXJ0eSxcbiAgICAgIHR5cGU6IFNvcnRUeXBlLkFTQ1xuICAgIH0pO1xuICB9XG59XG4iXX0=