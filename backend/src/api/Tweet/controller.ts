import autoBind from "auto-bind";
import { NextFunction, Request, Response } from "express";
import Twitter from "../../analyzer/Twitter/adapter";
import { ITwitterResponse } from "../../analyzer/Twitter/Interface";
class TwitterController{
	constructor() {
		autoBind(this);
        
	}
	async home(req: Request, res: Response, next: NextFunction): Promise<void>{
		res.json({
			message: "hi"
		});
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
			try {
				const googlePayload = Twitter.retrieveContent(tweetId);
				console.log("This is google payload!!!");
				console.log(googlePayload);
			} catch (error) {
				return next(error);
			}
			res.json({
				message: "hello"
			});
			
		}
		
	}
}

export default new TwitterController();