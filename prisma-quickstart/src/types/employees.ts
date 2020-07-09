import { objectType, extendType } from '@nexus/schema';

export const Employees = objectType({
  name: 'Employees',
  definition(t) {
    t.model.address();
    t.model.birth_date();
    t.model.city();
    t.model.country();
    t.model.employee_id();
    t.model.extension();
    t.model.first_name();
    t.model.hire_date();
    t.model.home_phone();
    t.model.last_name();
    t.model.notes();
    t.model.photo_path();
    t.model.postal_code();
    t.model.region();
    t.model.reports_to();
    t.model.title();
    t.model.title_of_courtesy();
    t.model.employees();
    t.model.employee_territories();
    t.model.other_employees();
    t.model.orders();
  },
});

export const employeesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.employees();
    t.crud.employees({ filtering: true, ordering: true });
  },
});

export const employeesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneEmployees();
    t.crud.updateOneEmployees();
    t.crud.upsertOneEmployees();
    t.crud.deleteOneEmployees();

    t.crud.updateManyEmployees();
    t.crud.deleteManyEmployees();
  },
});
