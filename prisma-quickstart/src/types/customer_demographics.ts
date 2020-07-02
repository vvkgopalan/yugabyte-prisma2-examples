import { objectType, extendType } from '@nexus/schema';

export const customer_demographics = objectType({
  name: 'customer_demographics',
  definition(t) {
    t.model.customer_desc();
    t.model.customer_type_id();
    t.model.customer_customer_demo();
  },
});

export const customer_demographicsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.customer_demographics();
    t.crud.customer_demographics({ filtering: true, ordering: true });
  },
});

export const customer_demographicsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecustomer_demographics();
    t.crud.updateOnecustomer_demographics();
    t.crud.upsertOnecustomer_demographics();
    t.crud.deleteOnecustomer_demographics();

    t.crud.updateManycustomer_demographics();
    t.crud.deleteManycustomer_demographics();
  },
});
