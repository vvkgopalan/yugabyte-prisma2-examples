import { objectType, extendType } from '@nexus/schema';

export const orderdetails = objectType({
  name: 'orderdetails',
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

export const orderdetailsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.orderdetails();
    t.crud.orderdetails({ filtering: true, ordering: true });
  },
});

export const orderdetailsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneorderdetails();
    t.crud.updateOneorderdetails();
    t.crud.upsertOneorderdetails();
    t.crud.deleteOneorderdetails();

    t.crud.updateManyorderdetails();
    t.crud.deleteManyorderdetails();
  },
});
