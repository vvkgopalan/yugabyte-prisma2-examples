import { objectType, extendType } from '@nexus/schema';

export const customer_customer_demo = objectType({
  name: 'customer_customer_demo',
  definition(t) {
    t.model.customer_id();
    t.model.customer_type_id();
    t.model.customers();
    t.model.customer_demographics();
  },
});

export const customer_customer_demoQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.customer_customer_demo();
    t.crud.customer_customer_demos({ filtering: true, ordering: true });
  },
});

export const customer_customer_demoMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecustomer_customer_demo();
    t.crud.updateOnecustomer_customer_demo();
    t.crud.upsertOnecustomer_customer_demo();
    t.crud.deleteOnecustomer_customer_demo();

    t.crud.updateManycustomer_customer_demo();
    t.crud.deleteManycustomer_customer_demo();
  },
});
