import autoBind from "auto-bind";
import { NextFunction, Request, Response } from "express";

class TweetController{
	constructor() {
		autoBind(this);
	}
    
	async getTweet(req: Request, res: Response, next: NextFunction): Promise<void>{
        
	}
}

export default new TweetController();