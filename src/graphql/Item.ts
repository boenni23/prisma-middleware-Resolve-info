import { prismaInputObjectType } from 'nexus-prisma'
import { extendInputType } from 'nexus'

//@ts-ignore
export const SecondItemWhereInput = prismaInputObjectType({
  name: 'SecondItemWhereInput',
  definition(t) {
    t.prismaFields(['*'])
  },
})

export const SecondItemSuperSearchWhereInput = extendInputType({
  type: 'SecondItemWhereInput',
  definition(t) {
    t.field('mySuperSearch', {
      type: 'String',
      nullable: true,
    })
  }
})
