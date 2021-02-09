import lanuage, { LanguageServiceClient } from "@google-cloud/language";
import VError from "verror";
class GoogleAnalyzer{
    private client: LanguageServiceClient;
    constructor() {
        this.client = new lanuage.LanguageServiceClient();
    }

    public async analyzeSentiment4(plainText: string):Promise<unknown> {
        try {
            const doc: any = {
                content: plainText,
                type: "PLAIN_TEXT",
              };
          
              // Detects the sentiment of the text
            const [result] = await this.client.analyzeSentiment({ document: doc });
            return result;
        } catch (error) {
            throw new VError(
                {
                  cause: error,
                  info: { httpCode: 500 },
                },
               "The response from google is undefined, please try agian."
              );
            }
        }
       
    }
    

export default new GoogleAnalyzer();