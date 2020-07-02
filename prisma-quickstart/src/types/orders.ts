import { objectType, extendType } from '@nexus/schema';

export const orders = objectType({
  name: 'orders',
  definition(t) {
    t.model.customer_id();
    t.model.employee_id();
    t.model.freight();
    t.model.order_date();
    t.model.order_id();
    t.model.required_date();
    t.model.ship_address();
    t.model.ship_city();
    t.model.ship_country();
    t.model.ship_name();
    t.model.ship_postal_code();
    t.model.ship_region();
    t.model.ship_via();
    t.model.shipped_date();
    t.model.customers();
    t.model.employees();
    t.model.shippers();
    t.model.order_details();
  },
});

export const ordersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.orders();
    t.crud.orders({ filtering: true, ordering: true });
  },
});

export const ordersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneorders();
    t.crud.updateOneorders();
    t.crud.upsertOneorders();
    t.crud.deleteOneorders();

    t.crud.updateManyorders();
    t.crud.deleteManyorders();
  },
});
