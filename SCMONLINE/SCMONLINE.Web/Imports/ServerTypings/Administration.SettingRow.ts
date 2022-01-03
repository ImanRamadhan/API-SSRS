namespace SCMONLINE.Administration {
    export interface SettingRow {
        Name?: string;
        Value?: string;
        Description?: string;
    }

    export namespace SettingRow {
        export const idProperty = 'Name';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.Setting';
        export const lookupKey = 'Administration.Setting';

        export function getLookup(): Q.Lookup<SettingRow> {
            return Q.getLookup<SettingRow>('Administration.Setting');
        }

        export declare const enum Fields {
            Name = "Name",
            Value = "Value",
            Description = "Description"
        }
    }
}

