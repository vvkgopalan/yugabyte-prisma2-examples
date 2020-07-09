import { objectType, extendType } from '@nexus/schema';

export const CustomerDemographics = objectType({
  name: 'CustomerDemographics',
  definition(t) {
    t.model.customer_desc();
    t.model.customer_type_id();
    t.model.customer_customer_demo();
  },
});

export const customerDemographicsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.customerDemographics();
    t.crud.customerDemographics({ filtering: true, ordering: true });
  },
});

export const customerDemographicsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCustomerDemographics();
    t.crud.updateOneCustomerDemographics();
    t.crud.upsertOneCustomerDemographics();
    t.crud.deleteOneCustomerDemographics();

    t.crud.updateManyCustomerDemographics();
    t.crud.deleteManyCustomerDemographics();
  },
});
