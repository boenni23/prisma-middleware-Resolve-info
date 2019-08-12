import { prismaObjectType } from 'nexus-prisma'
import { arg } from 'nexus'

export const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.field('items', {
      args: {
        where: arg({
          type: 'ItemWhereInput',
          nullable: true,
        }),
      },
      type: 'Item',
      list: true,
      resolve: async (root, args, { prisma }, info) => {
        console.log(info)
        return await prisma.items(args)
      },
    })
  },
})
