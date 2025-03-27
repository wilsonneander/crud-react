import express from "express";
import userRoutes from "./routes/users";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
