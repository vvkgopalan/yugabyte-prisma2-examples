import { objectType, extendType } from '@nexus/schema';

export const Products = objectType({
  name: 'Products',
  definition(t) {
    t.model.category_id();
    t.model.discontinued();
    t.model.product_id();
    t.model.product_name();
    t.model.quantity_per_unit();
    t.model.reorder_level();
    t.model.supplier_id();
    t.model.unit_price();
    t.model.units_in_stock();
    t.model.units_on_order();
    t.model.categories();
    t.model.suppliers();
    t.model.order_details();
  },
});

export const productsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.products();
    t.crud.products({ filtering: true, ordering: true });
  },
});

export const productsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneProducts();
    t.crud.updateOneProducts();
    t.crud.upsertOneProducts();
    t.crud.deleteOneProducts();

    t.crud.updateManyProducts();
    t.crud.deleteManyProducts();
  },
});
