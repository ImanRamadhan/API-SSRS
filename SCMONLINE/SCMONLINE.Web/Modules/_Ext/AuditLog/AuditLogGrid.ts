/// <reference path="../Bases/GridBase.ts" />

namespace _Ext {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable(false)
    //export class AuditLogGrid extends Serenity.EntityGrid<AuditLogRow, any> {
    export class AuditLogGrid extends GridBase<AuditLogRow, any> {
        protected getColumnsKey() { return '_Ext.AuditLog'; }
        protected getDialogType() { return AuditLogDialog; }
        protected getIdProperty() { return AuditLogRow.idProperty; }
        protected getLocalTextPrefix() { return AuditLogRow.localTextPrefix; }
        protected getService() { return AuditLogService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();
            buttons.splice(0, 1);

            return buttons;
        }
        protected createQuickSearchInput() {
        }

        protected getQuickFilters() {
            var filters = super.getQuickFilters();

            for (var filter of filters) {
                console.log(filter.type == Serenity.StringEditor);
                if (filter.type == Serenity.StringEditor) {
                    //change quick filter to contains operator by default
                    //filter.handler = h => {
                    //    if (h.active) {
                    //        h.request.Criteria = Serenity.Criteria.and(h.request.Criteria,
                    //            [[h.field], '=', h.value]);
                    //    }
                    //};
                    filter.handler = null;
                }
            }


            // we create a date-range quick filter, which is a composite
            // filter with two date time editors
            var actionDate = this.dateTimeRangeQuickFilter('ActionDate', 'Action Date');

            // need to override its handler, as default date-range filter will set Criteria parameter of list request.
            // we need to set StartDate and EndDate custom parameters of our AuditLogSpListRequest
            actionDate.handler = args => {

                // args.widget here is the start date editor. value of a date editor is a ISO date string
                var start = args.widget.value;

                // to find end date editor, need to search it by its css class among siblings
                var end = args.widget.element.nextAll('.s-DateTimeEditor.dateQ')
                    .getWidget(Serenity.DateTimeEditor).value;

                (args.request as AuditLogSpListRequest).ActionStartDate = start;
                (args.request as AuditLogSpListRequest).ActionEndDate = end;

                // active option controls when a filter editor looks active, e.g. its label is blueish
                args.active = !Q.isEmptyOrNull(start) || !Q.isEmptyOrNull(end);
            };

            filters.push(actionDate);

            return filters;
        }
    }
}