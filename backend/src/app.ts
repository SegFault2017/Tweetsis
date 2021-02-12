/* eslint-disable no-mixed-spaces-and-tabs */
import express,{Express, Request, Response} from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { notFound, errHandler } from "./middlewares/errors";
import router from "./router";
import path from "path";

class App{
  private app: Express;
  constructor() {
  	this.app = express();
  	this.config();
  	this.routes();
  	this.errors();
  }

  private config(): void{    
	  this.app.use(helmet());
  	this.app.use(cors({
  		origin: process.env.CORS_ORIGIN,
  		methods: ["POST"]
  	}));
  	this.app.use(express.json());
  	if (process.env.NODE_ENV === "development") {
  		this.app.use(morgan("dev"));
		} else if (process.env.NODE_ENV === "production") {
			console.log("In production mode.");
			this.app.use(express.static(path.join(__dirname + "/../public")));
			this.app.get("*", function (req: Request, res: Response) {
				res.sendFile(path.join(__dirname + "/../public/index.html"));
			});
	  }
  }

  private routes(): void{
  	router(this.app);
  }

  public createServer() {
  	const port = process.env.PORT || 8080;
  	this.app.listen(port, () => {
  		console.log(`Server starting, Listening at http://localhost:${port}`);
  	});
  }

  private errors(): void {
  	this.app.use(notFound);
  	this.app.use(errHandler);   
  }
}


export default new App();
