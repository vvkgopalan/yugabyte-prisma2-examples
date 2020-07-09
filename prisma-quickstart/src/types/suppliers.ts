import { objectType, extendType } from '@nexus/schema';

export const Suppliers = objectType({
  name: 'Suppliers',
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
    t.crud.createOneSuppliers();
    t.crud.updateOneSuppliers();
    t.crud.upsertOneSuppliers();
    t.crud.deleteOneSuppliers();

    t.crud.updateManySuppliers();
    t.crud.deleteManySuppliers();
  },
});
