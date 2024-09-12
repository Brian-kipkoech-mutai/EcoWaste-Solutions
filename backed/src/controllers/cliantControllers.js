import { addClientService } from "../services/cliantServices.js";

export const addClient = async (req, res, next) => {
  try {
    const data = req.body;
    await addClientService(data);
    res.status(200).json({ message: "Client added successfully" });
  } catch (error) {
    next(error);
  }
};
