import { objectType, extendType } from '@nexus/schema';

export const USStates = objectType({
  name: 'USStates',
  definition(t) {
    t.model.state_abbr();
    t.model.state_id();
    t.model.state_name();
    t.model.state_region();
  },
});

export const uSStatesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.USStates();
    t.crud.USStates({ filtering: true, ordering: true });
  },
});

export const uSStatesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneUSStates();
    t.crud.updateOneUSStates();
    t.crud.upsertOneUSStates();
    t.crud.deleteOneUSStates();

    t.crud.updateManyUSStates();
    t.crud.deleteManyUSStates();
  },
});
