export const getModels = response =>
  response.data.holder ? response.data.holder.models : [];

export const getModel = response =>
  response.data.holder ? response.data.holder.models[0] : [];
