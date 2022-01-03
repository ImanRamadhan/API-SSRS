namespace SCMONLINE.Procurement {
    export interface CharacteristicDescriptionRow {
        InternalChar?: string;
        Language?: string;
        IntCounter?: number;
        Description?: string;
        Heading1?: string;
        Heading2?: string;
        ValidFrom?: string;
        TechStFrom?: string;
        ChangeNumber?: string;
        DeletionInd?: string;
    }

    export namespace CharacteristicDescriptionRow {
        export const idProperty = 'InternalChar';
        export const nameProperty = 'InternalChar';
        export const localTextPrefix = 'Procurement.CharacteristicDescription';

        export declare const enum Fields {
            InternalChar = "InternalChar",
            Language = "Language",
            IntCounter = "IntCounter",
            Description = "Description",
            Heading1 = "Heading1",
            Heading2 = "Heading2",
            ValidFrom = "ValidFrom",
            TechStFrom = "TechStFrom",
            ChangeNumber = "ChangeNumber",
            DeletionInd = "DeletionInd"
        }
    }
}

