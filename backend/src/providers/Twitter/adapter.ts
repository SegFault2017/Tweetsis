import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ITwitterResponse } from "./Interface";
import * as VError from "verror";

class TwitterAdapter {
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

    private buildURLFor(tweetId: string): string {
        const endPoint =  `/tweets?ids=${tweetId}&tweet.fields=created_at&expansions=author_id&user.fields=created_at,profile_image_url`;
        return this.basedURL.concat(endPoint);
    }

    private validTweetID(twitterResponse: AxiosResponse): boolean{
        return twitterResponse.data ? true : false;
    }

    private async parse(twitterResponse: AxiosResponse): Promise<ITwitterResponse>{
        console.log("parsing twitter response...");
        // check if the tweet 19-character ID passed returns valid data.
        if (this.validTweetID(twitterResponse)) {
            try {
                const twitterJson = twitterResponse.data;
                const tweetText = twitterJson.data[0].text;
                const tweetID = twitterJson.data[0].id;
                const tweetCreatedAtTime = twitterJson.data[0].created_at;
                const userProfileName = twitterJson.data[0].username;
                const userActualName = twitterJson.data[0].name;
                const userProfileImgUrl = twitterJson.data[0].profile_image_url;
                
                console.log(tweetID, tweetText);
                return {
                    tweet: {
                        text: tweetText,
                        id: tweetID,
                        createdTime: tweetCreatedAtTime,
                    },
                    user: {
                        name: userActualName,
                        profile_name: userProfileName,
                        url: userProfileImgUrl,
                    }
                }
            } catch (error) {
                throw new VError({
                    casue: error,
                },
                error.message)
            }

)


        } else {
            throw new Error("Not a valid tweet id for such twitter response.")
        }
    }
    async retrieveContent(tweetId: string): Promise<ITwitterResponse>{
        
        const formattedTweet = this.buildURLFor(tweetId);
        console.log(`URL for Twitter Request: ${formattedTweet}`);
        const responseFromTwitter = await this.axiosInstance.get(formattedTweet);
        console.log("Response from Twitter:\n");
        console.log(responseFromTwitter.data);
        const payload = await this.parse(responseFromTwitter);
        console.log("Response for Google NLP API:\n");
        console.log(payload);
        return payload;
    }

    
}

export default new TwitterAdapter();