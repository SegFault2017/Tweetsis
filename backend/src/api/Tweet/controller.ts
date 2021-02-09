import autoBind from "auto-bind";
import { NextFunction, Request, Response } from "express";
import TwitterAdapter from "./../../ScocialMedia/Twitter";
class TweetController{
	constructor() {
		autoBind(this);
        
	}
    
	async getTweet(req: Request, res: Response, next: NextFunction): Promise<void>{
		const tweetIdLength = req.params.id.length;
		if (tweetIdLength != 19) {
			res.status(400).json({
				error: "Invalid ID.",
				message: "ID must be a 19-character long Tweet ID.",
			});
		} else {
			const tweetId = req.params.id;
		}
		
	}
}

export default new TweetController();