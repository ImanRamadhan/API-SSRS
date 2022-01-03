namespace SCMONLINE.Procurement {
    export interface VendorForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        PenaltyCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Name2: Serenity.StringEditor;
        Name3: Serenity.StringEditor;
        Name4: Serenity.StringEditor;
        City: Serenity.StringEditor;
        District: Serenity.StringEditor;
        PoBox: Serenity.StringEditor;
        PoBoxPcode: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        SearchTerm: Serenity.StringEditor;
        Street: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        TrainStation: Serenity.StringEditor;
        LocationNo1: Serenity.IntegerEditor;
        LocationNo2: Serenity.IntegerEditor;
        Authorization: Serenity.StringEditor;
        Industry: Serenity.StringEditor;
        CheckDigit: Serenity.IntegerEditor;
        DataLine: Serenity.StringEditor;
        DmeIndicator: Serenity.StringEditor;
        InstructionKey: Serenity.StringEditor;
        CreatedOn: Serenity.DateEditor;
        VendorRepresentative: Serenity.LookupEditor;
    }

    export class VendorForm extends Serenity.PrefixedContext {
        static formKey = 'Procurement.Vendor';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!VendorForm.init)  {
                VendorForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(VendorForm, [
                    'Name', w0,
                    'Description', w0,
                    'PenaltyCode', w0,
                    'Country', w0,
                    'Name2', w0,
                    'Name3', w0,
                    'Name4', w0,
                    'City', w0,
                    'District', w0,
                    'PoBox', w0,
                    'PoBoxPcode', w0,
                    'PostalCode', w0,
                    'Region', w0,
                    'SearchTerm', w0,
                    'Street', w0,
                    'Address', w0,
                    'Title', w0,
                    'TrainStation', w0,
                    'LocationNo1', w1,
                    'LocationNo2', w1,
                    'Authorization', w0,
                    'Industry', w0,
                    'CheckDigit', w1,
                    'DataLine', w0,
                    'DmeIndicator', w0,
                    'InstructionKey', w0,
                    'CreatedOn', w2,
                    'VendorRepresentative', w3
                ]);
            }
        }
    }
}

