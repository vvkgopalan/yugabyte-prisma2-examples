import { objectType, extendType } from '@nexus/schema';

export const CustomerCustomerDemo = objectType({
  name: 'CustomerCustomerDemo',
  definition(t) {
    t.model.customer_id();
    t.model.customer_type_id();
    t.model.customers();
    t.model.customer_demographics();
  },
});

export const customerCustomerDemoQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.customerCustomerDemo();
  },
});

export const customerCustomerDemoMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCustomerCustomerDemo();
    t.crud.updateOneCustomerCustomerDemo();
    t.crud.upsertOneCustomerCustomerDemo();
    t.crud.deleteOneCustomerCustomerDemo();

    t.crud.updateManyCustomerCustomerDemo();
    t.crud.deleteManyCustomerCustomerDemo();
  },
});
