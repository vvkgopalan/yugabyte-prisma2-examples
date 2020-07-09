import { objectType, extendType } from '@nexus/schema';

export const OrderDetails = objectType({
  name: 'OrderDetails',
  definition(t) {
    t.model.discount();
    t.model.order_id();
    t.model.product_id();
    t.model.quantity();
    t.model.unit_price();
    t.model.orders();
    t.model.products();
  },
});

export const orderDetailsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.orderDetails();
    t.crud.orderDetails({ filtering: true, ordering: true });
  },
});

export const orderDetailsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneOrderDetails();
    t.crud.updateOneOrderDetails();
    t.crud.upsertOneOrderDetails();
    t.crud.deleteOneOrderDetails();

    t.crud.updateManyOrderDetails();
    t.crud.deleteManyOrderDetails();
  },
});
