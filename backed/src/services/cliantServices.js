import Client from "../models/cliantModel.js";

export const addClientService = async (data) => {
  await Client.create(data);
  return "Client added successfully";
};


