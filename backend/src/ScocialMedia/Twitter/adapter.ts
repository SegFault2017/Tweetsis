import autoBind from "auto-bind";
import axios, { AxiosInstance } from "axios";

export class TwitterAdapter {
    private basedURL = process.env.TWITTER_API_BASED_URL!
    private axiosInstance: AxiosInstance
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        this.axiosInstance = axios.create({
            baseURL: this.basedURL,
            headers: {
                Authorization: `Bearer ${process.env.bearer_token}`
            }
        });
    }

}

export default new TwitterAdapter();