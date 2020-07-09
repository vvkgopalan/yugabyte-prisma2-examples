import { objectType, extendType } from '@nexus/schema';

export const Shippers = objectType({
  name: 'Shippers',
  definition(t) {
    t.model.company_name();
    t.model.phone();
    t.model.shipper_id();
    t.model.orders();
  },
});

export const shippersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.shippers();
    t.crud.shippers({ filtering: true, ordering: true });
  },
});

export const shippersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneShippers();
    t.crud.updateOneShippers();
    t.crud.upsertOneShippers();
    t.crud.deleteOneShippers();

    t.crud.updateManyShippers();
    t.crud.deleteManyShippers();
  },
});
