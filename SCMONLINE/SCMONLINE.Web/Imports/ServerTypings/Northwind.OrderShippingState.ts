namespace SCMONLINE.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'SCMONLINE.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

