import { objectType, extendType } from '@nexus/schema';

export const employee_territories = objectType({
  name: 'employee_territories',
  definition(t) {
    t.model.employee_id();
    t.model.territory_id();
    t.model.employees();
    t.model.territories();
  },
});

export const employee_territoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.employee_territories();
    t.crud.employee_territories({ filtering: true, ordering: true });
  },
});

export const employee_territoriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneemployee_territories();
    t.crud.updateOneemployee_territories();
    t.crud.upsertOneemployee_territories();
    t.crud.deleteOneemployee_territories();

    t.crud.updateManyemployee_territories();
    t.crud.deleteManyemployee_territories();
  },
});
