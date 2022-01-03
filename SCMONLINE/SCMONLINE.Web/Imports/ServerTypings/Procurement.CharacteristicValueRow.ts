namespace SCMONLINE.Procurement {
    export interface CharacteristicValueRow {
        CharacteristicValueId?: number;
        Object?: string;
        InternalChar?: string;
        Counter?: string;
        ObjectClass?: string;
        ClassType?: string;
        IntCounter?: string;
        CharValue?: string;
        ValueFrom?: string;
        IntMeasUnit?: string;
        ValueTo?: string;
        Code?: string;
        ToleranceFrom?: string;
        ToleranceTo?: string;
        Percentage?: string;
        Increment?: string;
        Author?: string;
        ChangeNumber?: string;
        ValidFrom?: string;
        DeletionInd?: string;
        InstanceCntr?: string;
        Position?: string;
        CompType?: string;
    }

    export namespace CharacteristicValueRow {
        export const idProperty = 'CharacteristicValueId';
        export const nameProperty = 'Object';
        export const localTextPrefix = 'Procurement.CharacteristicValue';

        export declare const enum Fields {
            CharacteristicValueId = "CharacteristicValueId",
            Object = "Object",
            InternalChar = "InternalChar",
            Counter = "Counter",
            ObjectClass = "ObjectClass",
            ClassType = "ClassType",
            IntCounter = "IntCounter",
            CharValue = "CharValue",
            ValueFrom = "ValueFrom",
            IntMeasUnit = "IntMeasUnit",
            ValueTo = "ValueTo",
            Code = "Code",
            ToleranceFrom = "ToleranceFrom",
            ToleranceTo = "ToleranceTo",
            Percentage = "Percentage",
            Increment = "Increment",
            Author = "Author",
            ChangeNumber = "ChangeNumber",
            ValidFrom = "ValidFrom",
            DeletionInd = "DeletionInd",
            InstanceCntr = "InstanceCntr",
            Position = "Position",
            CompType = "CompType"
        }
    }
}

