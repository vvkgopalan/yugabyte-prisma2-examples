import { objectType, extendType } from '@nexus/schema';

export const customerdemographics = objectType({
  name: 'customerdemographics',
  definition(t) {
    t.model.customer_desc();
    t.model.customer_type_id();
    t.model.customercustomerdemo();
  },
});

export const customerdemographicsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.customerdemographics();
    t.crud.customerdemographics({ filtering: true, ordering: true });
  },
});

export const customerdemographicsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecustomerdemographics();
    t.crud.updateOnecustomerdemographics();
    t.crud.upsertOnecustomerdemographics();
    t.crud.deleteOnecustomerdemographics();

    t.crud.updateManycustomerdemographics();
    t.crud.deleteManycustomerdemographics();
  },
});
