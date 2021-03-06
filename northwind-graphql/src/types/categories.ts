import { objectType, extendType } from '@nexus/schema';

export const categories = objectType({
  name: 'categories',
  definition(t) {
    t.model.category_id();
    t.model.category_name();
    t.model.description();
    t.model.products();
  },
});

export const categoriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.categories();
    t.crud.categories({ filtering: true, ordering: true });
  },
});

export const categoriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecategories();
    t.crud.updateOnecategories();
    t.crud.upsertOnecategories();
    t.crud.deleteOnecategories();

    t.crud.updateManycategories();
    t.crud.deleteManycategories();
  },
});
