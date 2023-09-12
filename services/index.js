exports.generateCrudMethods = (Model) => {
  return {
    // getAll: async () => await Model.find(),
    getById: async (id) => await Model.findById(id),
    create: async (record) => await Model.create(record),
    update: async (id, record) =>
      await Model.findByIdAndUpdate(id, record, { new: true }),
    delete: async (id) => await Model.findByIdAndDelete(id),
  };
};
