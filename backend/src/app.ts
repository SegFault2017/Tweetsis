/* eslint-disable no-mixed-spaces-and-tabs */
import express,{Express} from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { notFound, errHandler } from "./middlewares/errors";
import router from "./router";

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
  	if (process.env.NODE_ENV !== "production") {
  		this.app.use(morgan("dev"));
  	}
  }

  private routes(): void{
  	router(this.app);
  }

  public createServer() {
  	const port = process.env.PORT || 8000;
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