import { objectType, extendType } from '@nexus/schema';

export const Categories = objectType({
  name: 'Categories',
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
    t.crud.createOneCategories();
    t.crud.updateOneCategories();
    t.crud.upsertOneCategories();
    t.crud.deleteOneCategories();

    t.crud.updateManyCategories();
    t.crud.deleteManyCategories();
  },
});
