import { objectType, extendType, intArg, stringArg } from '@nexus/schema';

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

    t.list.field('list_categories', {
      type: 'categories',
      resolve: (_, args, ctx) => {
        return ctx.prisma.categories.findMany()
      },
    })
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

    t.field('update_category', {
      type: 'categories',
      nullable: true,
      args: {
        id: intArg(),
        name: stringArg()
      },
      resolve: (_, { id, name }, ctx) => {
        return ctx.prisma.categories.update({
          where: { category_id: Number(id) },
          data: { category_name: name },
        })
      },
    })
  },
});
