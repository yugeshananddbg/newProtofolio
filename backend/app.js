import express from "express";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/userRouter.js";

export const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use("/api/v1", userRouter);

app.use(express.static("./frontend/build")); 
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});
