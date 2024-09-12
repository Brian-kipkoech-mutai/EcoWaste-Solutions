import { model, Schema } from "mongoose";

const clientSchema = new Schema(
  {
    name: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
    phoneNumber: { type: "string", required: true, unique: true },
    location: { type: "string", required: true },
    priceTire: { type: "number", required: true },
    description: { type: "string" },
  }, {
   timestamps:true
  }

);

const Client = model("Client", clientSchema);
 export default Client;



