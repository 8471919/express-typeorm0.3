import express, { NextFunction, Request, Response } from "express";
import dataSource from "../data-source";
import * as bcrypt from "bcrypt";

const userRouter = express.Router();

userRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.send("Hello, This is user Router");
});

userRouter.post(
	"/register",
	async (req: Request, res: Response, next: NextFunction) => {
		const email = req.body.email;
		const password = await bcrypt.hash(req.body.password, 10);

		const user = await dataSource.getRepository("user").save({
			email: email,
			password: password,
		});

		res.send(user);
	}
);

export default userRouter;
