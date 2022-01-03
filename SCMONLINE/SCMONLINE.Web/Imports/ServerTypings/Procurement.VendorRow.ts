namespace SCMONLINE.Procurement {
    export interface VendorRow {
        VendorId?: string;
        Name?: string;
        Description?: string;
        PenaltyCode?: string;
        Vendor?: string;
        Country?: string;
        Name2?: string;
        Name3?: string;
        Name4?: string;
        City?: string;
        District?: string;
        PoBox?: string;
        PoBoxPcode?: string;
        PostalCode?: string;
        Region?: string;
        SearchTerm?: string;
        Street?: string;
        Address?: string;
        Title?: string;
        TrainStation?: string;
        LocationNo1?: number;
        LocationNo2?: number;
        Authorization?: string;
        Industry?: string;
        CheckDigit?: number;
        DataLine?: string;
        DmeIndicator?: string;
        InstructionKey?: string;
        CreatedOn?: string;
        Qualification?: string;
        VendorRepresentative?: number[];
    }

    export namespace VendorRow {
        export const idProperty = 'VendorId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Procurement.Vendor';
        export const lookupKey = 'Procurement.Vendor';

        export function getLookup(): Q.Lookup<VendorRow> {
            return Q.getLookup<VendorRow>('Procurement.Vendor');
        }

        export declare const enum Fields {
            VendorId = "VendorId",
            Name = "Name",
            Description = "Description",
            PenaltyCode = "PenaltyCode",
            Vendor = "Vendor",
            Country = "Country",
            Name2 = "Name2",
            Name3 = "Name3",
            Name4 = "Name4",
            City = "City",
            District = "District",
            PoBox = "PoBox",
            PoBoxPcode = "PoBoxPcode",
            PostalCode = "PostalCode",
            Region = "Region",
            SearchTerm = "SearchTerm",
            Street = "Street",
            Address = "Address",
            Title = "Title",
            TrainStation = "TrainStation",
            LocationNo1 = "LocationNo1",
            LocationNo2 = "LocationNo2",
            Authorization = "Authorization",
            Industry = "Industry",
            CheckDigit = "CheckDigit",
            DataLine = "DataLine",
            DmeIndicator = "DmeIndicator",
            InstructionKey = "InstructionKey",
            CreatedOn = "CreatedOn",
            Qualification = "Qualification",
            VendorRepresentative = "VendorRepresentative"
        }
    }
}

