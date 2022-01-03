namespace SCMONLINE.Procurement {
    export interface AssignBuyerActionRequest extends Serenity.ServiceRequest {
        PrNo?: string[];
        BuyerId?: number;
    }
}

