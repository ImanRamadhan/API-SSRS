module SCMONLINE.mi_osReadTableMC_PXD {
    export class dt_ReadTableMC_Request extends Object {
        private cLIENTField: string;
        private qUERY_TABLEField: string;
        private dELIMITERField: string;
        private nO_DATAField: string;
        private rOWSKIPSField: string;
        private rOWCOUNTField: string;
        private oPTIONSField: dt_ReadTableMC_RequestOPTIONS[];
        private fIELDSField: dt_ReadTableMC_RequestFIELDS[];
        public get CLIENT(): string {
            return this.cLIENTField;
        }
        public set CLIENT(value: string) {
            this.cLIENTField = value;
        }
        public get QUERY_TABLE(): string {
            return this.qUERY_TABLEField;
        }
        public set QUERY_TABLE(value: string) {
            this.qUERY_TABLEField = value;
        }
        public get DELIMITER(): string {
            return this.dELIMITERField;
        }
        public set DELIMITER(value: string) {
            this.dELIMITERField = value;
        }
        public get NO_DATA(): string {
            return this.nO_DATAField;
        }
        public set NO_DATA(value: string) {
            this.nO_DATAField = value;
        }
        public get ROWSKIPS(): string {
            return this.rOWSKIPSField;
        }
        public set ROWSKIPS(value: string) {
            this.rOWSKIPSField = value;
        }
        public get ROWCOUNT(): string {
            return this.rOWCOUNTField;
        }
        public set ROWCOUNT(value: string) {
            this.rOWCOUNTField = value;
        }
        public get OPTIONS(): dt_ReadTableMC_RequestOPTIONS[] {
            return this.oPTIONSField;
        }
        public set OPTIONS(value: dt_ReadTableMC_RequestOPTIONS[]) {
            this.oPTIONSField = value;
        }
        public get FIELDS(): dt_ReadTableMC_RequestFIELDS[] {
            return this.fIELDSField;
        }
        public set FIELDS(value: dt_ReadTableMC_RequestFIELDS[]) {
            this.fIELDSField = value;
        }
    }
    export class dt_ReadTableMC_RequestOPTIONS extends Object {
        private tEXTField: string;
        public get TEXT(): string {
            return this.tEXTField;
        }
        public set TEXT(value: string) {
            this.tEXTField = value;
        }
    }
    /*[System.CodeDom.Compiler.GeneratedCodeAttribute("System.Xml", "4.7.2612.0")]
        [System.SerializableAttribute()]
        [System.Diagnostics.DebuggerStepThroughAttribute()]
        [System.ComponentModel.DesignerCategoryAttribute("code")]
        [System.Xml.Serialization.XmlTypeAttribute(Namespace="urn:pertamina:osds:BapiPackageMultiClient")]*/
    export class dt_ReadTableMC_Response extends Object {
        private cLIENTField: string;
        private eRROR_CODESField: string;
        private fIELDSField: dt_ReadTableMC_ResponseFIELDS[];
        private dATAField: dt_ReadTableMC_ResponseDATA[];
        public get CLIENT(): string {
            return this.cLIENTField;
        }
        public set CLIENT(value: string) {
            this.cLIENTField = value;
        }
        public get ERROR_CODES(): string {
            return this.eRROR_CODESField;
        }
        public set ERROR_CODES(value: string) {
            this.eRROR_CODESField = value;
        }
        public get FIELDS(): dt_ReadTableMC_ResponseFIELDS[] {
            return this.fIELDSField;
        }
        public set FIELDS(value: dt_ReadTableMC_ResponseFIELDS[]) {
            this.fIELDSField = value;
        }
        public get DATA(): dt_ReadTableMC_ResponseDATA[] {
            return this.dATAField;
        }
        public set DATA(value: dt_ReadTableMC_ResponseDATA[]) {
            this.dATAField = value;
        }

    }
    export class dt_ReadTableMC_ResponseFIELDS extends Object {
        private fIELDNAMEField: string;
        private oFFSETField: string;
        private lENGTHField: string;
        private tYPEField: string;
        private fIELDTEXTField: string;
        public get FIELDNAME(): string {
            return this.fIELDNAMEField;
        }
        public set FIELDNAME(value: string) {
            this.fIELDNAMEField = value;
        }
        public get OFFSET(): string {
            return this.oFFSETField;
        }
        public set OFFSET(value: string) {
            this.oFFSETField = value;
        }
        public get LENGTH(): string {
            return this.lENGTHField;
        }
        public set LENGTH(value: string) {
            this.lENGTHField = value;
        }
        public get TYPE(): string {
            return this.tYPEField;
        }
        public set TYPE(value: string) {
            this.tYPEField = value;
        }
        public get FIELDTEXT(): string {
            return this.fIELDTEXTField;
        }
        public set FIELDTEXT(value: string) {
            this.fIELDTEXTField = value;
        }

    }
    export class dt_ReadTableMC_ResponseDATA extends Object {
        private waField: string;
        public get WA(): string {
            return this.waField;
        }
        public set WA(value: string) {
            this.waField = value;
        }

    }
    export class dt_ReadTableMC_RequestFIELDS extends Object {
        private fIELDNAMEField: string;
        public get FIELDNAME(): string {
            return this.fIELDNAMEField;
        }
        public set FIELDNAME(value: string) {
            this.fIELDNAMEField = value;
        }
    }
}