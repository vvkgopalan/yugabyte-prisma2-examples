import { objectType, extendType } from '@nexus/schema';

export const employeeterritories = objectType({
  name: 'employeeterritories',
  definition(t) {
    t.model.employee_id();
    t.model.territory_id();
    t.model.employees();
    t.model.territories();
    t.model.desc();
  },
});

export const employeeterritoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.employeeterritories();
    t.crud.employeeterritories({ filtering: true, ordering: true });
  },
});

export const employeeterritoriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneemployeeterritories();
    t.crud.updateOneemployeeterritories();
    t.crud.upsertOneemployeeterritories();
    t.crud.deleteOneemployeeterritories();

    t.crud.updateManyemployeeterritories();
    t.crud.deleteManyemployeeterritories();
  },
});
