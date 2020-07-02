import { objectType, extendType } from '@nexus/schema';

export const region = objectType({
  name: 'region',
  definition(t) {
    t.model.region_description();
    t.model.region_id();
    t.model.territories();
  },
});

export const regionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.region();
    t.crud.regions({ filtering: true, ordering: true });
  },
});

export const regionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneregion();
    t.crud.updateOneregion();
    t.crud.upsertOneregion();
    t.crud.deleteOneregion();

    t.crud.updateManyregion();
    t.crud.deleteManyregion();
  },
});
