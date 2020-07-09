import { objectType, extendType } from '@nexus/schema';

export const customercustomerdemo = objectType({
  name: 'customercustomerdemo',
  definition(t) {
    t.model.customer_id();
    t.model.customer_type_id();
    t.model.customers();
    t.model.customerdemographics();
    t.model.desc();
  },
});

export const customercustomerdemoQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.customercustomerdemo();
    t.crud.customercustomerdemos({ filtering: true, ordering: true });
  },
});

export const customercustomerdemoMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecustomercustomerdemo();
    t.crud.updateOnecustomercustomerdemo();
    t.crud.upsertOnecustomercustomerdemo();
    t.crud.deleteOnecustomercustomerdemo();

    t.crud.updateManycustomercustomerdemo();
    t.crud.deleteManycustomercustomerdemo();
  },
});
