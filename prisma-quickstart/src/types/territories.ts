import { objectType, extendType } from '@nexus/schema';

export const territories = objectType({
  name: 'territories',
  definition(t) {
    t.model.region_id();
    t.model.territory_description();
    t.model.territory_id();
    t.model.region();
    t.model.employee_territories();
  },
});

export const territoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.territories();
    t.crud.territories({ filtering: true, ordering: true });
  },
});

export const territoriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneterritories();
    t.crud.updateOneterritories();
    t.crud.upsertOneterritories();
    t.crud.deleteOneterritories();

    t.crud.updateManyterritories();
    t.crud.deleteManyterritories();
  },
});
