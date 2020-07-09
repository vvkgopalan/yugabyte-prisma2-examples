import { objectType, extendType } from '@nexus/schema';

export const EmployeeTerritories = objectType({
  name: 'EmployeeTerritories',
  definition(t) {
    t.model.employee_id();
    t.model.territory_id();
    t.model.employees();
    t.model.territories();
  },
});

export const employeeTerritoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.employeeTerritories();
    t.crud.employeeTerritories({ filtering: true, ordering: true });
  },
});

export const employeeTerritoriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneEmployeeTerritories();
    t.crud.updateOneEmployeeTerritories();
    t.crud.upsertOneEmployeeTerritories();
    t.crud.deleteOneEmployeeTerritories();

    t.crud.updateManyEmployeeTerritories();
    t.crud.deleteManyEmployeeTerritories();
  },
});
