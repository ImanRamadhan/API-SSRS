namespace SCMONLINE {
    export interface ExcelImportResponse<T> extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
        ImportedData?: T[];
    }
}

