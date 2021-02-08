import { Express } from "express";
import GeneralRouter from "./../api/general/routes";

export default (app: Express): void => {
	app.use("/", GeneralRouter);
};