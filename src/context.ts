import { prisma, Prisma } from '../.yoga/prisma-client'

export default () => ({ prisma })

export interface Context {
  prisma: Prisma
}
