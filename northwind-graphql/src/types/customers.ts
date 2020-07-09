import { objectType, extendType } from '@nexus/schema';

export const customers = objectType({
  name: 'customers',
  definition(t) {
    t.model.address();
    t.model.city();
    t.model.company_name();
    t.model.contact_name();
    t.model.contact_title();
    t.model.country();
    t.model.customer_id();
    t.model.fax();
    t.model.phone();
    t.model.postal_code();
    t.model.region();
    t.model.customercustomerdemo();
    t.model.orders();
  },
});

export const customersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.customers();
    t.crud.customers({ filtering: true, ordering: true });
  },
});

export const customersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecustomers();
    t.crud.updateOnecustomers();
    t.crud.upsertOnecustomers();
    t.crud.deleteOnecustomers();

    t.crud.updateManycustomers();
    t.crud.deleteManycustomers();
  },
});
