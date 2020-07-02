import { objectType, extendType } from '@nexus/schema';

export const order_details = objectType({
  name: 'order_details',
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

export const order_detailsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.order_details();
    t.crud.order_details({ filtering: true, ordering: true });
  },
});

export const order_detailsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneorder_details();
    t.crud.updateOneorder_details();
    t.crud.upsertOneorder_details();
    t.crud.deleteOneorder_details();

    t.crud.updateManyorder_details();
    t.crud.deleteManyorder_details();
  },
});
