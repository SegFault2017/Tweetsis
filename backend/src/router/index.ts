import { Express } from "express";
import GeneralRouter from "./../api/general/routes";
import TwitterRouter from "./../api/Tweet/routes";
export default (app: Express): void => {
	app.use("/", GeneralRouter);
	app.use("/analyze", TwitterRouter);
};