import { objectType, extendType } from '@nexus/schema';

export const shippers = objectType({
  name: 'shippers',
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
    t.crud.createOneshippers();
    t.crud.updateOneshippers();
    t.crud.upsertOneshippers();
    t.crud.deleteOneshippers();

    t.crud.updateManyshippers();
    t.crud.deleteManyshippers();
  },
});
