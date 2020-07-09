import { objectType, extendType } from '@nexus/schema';

export const usstates = objectType({
  name: 'usstates',
  definition(t) {
    t.model.state_abbr();
    t.model.state_id();
    t.model.state_name();
    t.model.state_region();
  },
});

export const usstatesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.usstates();
    t.crud.usstates({ filtering: true, ordering: true });
  },
});

export const usstatesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneusstates();
    t.crud.updateOneusstates();
    t.crud.upsertOneusstates();
    t.crud.deleteOneusstates();

    t.crud.updateManyusstates();
    t.crud.deleteManyusstates();
  },
});
