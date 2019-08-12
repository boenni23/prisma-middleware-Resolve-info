export default {
  Query: {
    items: async (resolve, root, args, context, info) => {
      return await resolve(
        root,
        args,
        context,
        `
        secondItems(where: {secondField: "1"}){id secondField}
      `,
      )
    },
  },
}
