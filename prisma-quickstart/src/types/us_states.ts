import { objectType, extendType } from '@nexus/schema';

export const us_states = objectType({
  name: 'us_states',
  definition(t) {
    t.model.state_abbr();
    t.model.state_id();
    t.model.state_name();
    t.model.state_region();
  },
});

export const us_statesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.us_states();
    t.crud.us_states({ filtering: true, ordering: true });
  },
});

export const us_statesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneus_states();
    t.crud.updateOneus_states();
    t.crud.upsertOneus_states();
    t.crud.deleteOneus_states();

    t.crud.updateManyus_states();
    t.crud.deleteManyus_states();
  },
});
