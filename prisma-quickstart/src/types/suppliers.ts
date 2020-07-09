import { objectType, extendType } from '@nexus/schema';

export const suppliers = objectType({
  name: 'suppliers',
  definition(t) {
    t.model.address();
    t.model.city();
    t.model.company_name();
    t.model.contact_name();
    t.model.contact_title();
    t.model.country();
    t.model.fax();
    t.model.homepage();
    t.model.phone();
    t.model.postal_code();
    t.model.region();
    t.model.supplier_id();
    t.model.products();
  },
});

export const suppliersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.suppliers();
    t.crud.suppliers({ filtering: true, ordering: true });
  },
});

export const suppliersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnesuppliers();
    t.crud.updateOnesuppliers();
    t.crud.upsertOnesuppliers();
    t.crud.deleteOnesuppliers();

    t.crud.updateManysuppliers();
    t.crud.deleteManysuppliers();
  },
});
