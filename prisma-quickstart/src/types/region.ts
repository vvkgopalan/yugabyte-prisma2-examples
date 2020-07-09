import { objectType, extendType } from '@nexus/schema';

export const Region = objectType({
  name: 'Region',
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
    t.crud.region({ filtering: true, ordering: true });
  },
});

export const regionMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneRegion();
    t.crud.updateOneRegion();
    t.crud.upsertOneRegion();
    t.crud.deleteOneRegion();

    t.crud.updateManyRegion();
    t.crud.deleteManyRegion();
  },
});
