import { Router } from "express";
import TwitterController from "./controller";

const router = Router();
router.get("/", TwitterController.home);
router.post("/twitter/:id", TwitterController.getTweet);

export default router;

