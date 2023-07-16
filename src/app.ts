import express, { Application } from "express";
import cookieParser from "cookie-parser";
import http from "http";

import userRouter from "./routes/user";

const app: Application = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);

const server = http.createServer(app);
server.listen(3000, () => {
	console.log("start! express server on port 3000");
});
