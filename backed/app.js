import express from "express";
import cors from "cors";
import clientRoutes from "./src/routes/clientRoute.js";
import connectDB from "./src/config/database.js";


const app = express();

app.use(cors());
app.use(express.json());

//connect to db
 connectDB()

//used  for monitoring and logging requests
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

//Routes handers
  app.use("/api/clients",clientRoutes);
  

 



//error handler
app.use((error,req, res, next) =>
  res.status(500).json({ message: error.message })
);

export default app;
