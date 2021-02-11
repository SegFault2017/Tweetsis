import axios from "axios";
import {
  ADD_DOCUMENT,
  ADD_AUTHOR,
  ADD_SENTENCE,
  SET_LOADING,
  SWITCH_ANALYSIS,
  ADD_CREATED_TIME,
  CLEAR_SENTENCES,
} from "./types";

export const getSentimentData = (tweetUid) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    let sentenceCounter = 0;
    const res = await axios.post(`/analyze/twitter/${tweetUid}`);
    dispatch({ type: ADD_AUTHOR, payload: res.data.twitter.user });

    dispatch({ type: ADD_DOCUMENT, payload: res.data });

    dispatch({
      type: ADD_CREATED_TIME,
      payload: res.data.twitter.tweet.createdTime,
    });

    res.data.google.sentences.map((sentence) => {
      const sentencePayload = {
        sentenceData: {
          score: sentence.sentiment.score,
          magnitude: sentence.sentiment.magnitude,
          content: sentence.text.content,
        },
        sentenceIndex: sentenceCounter,
      };
      dispatch({ type: ADD_SENTENCE, payload: sentencePayload });
      sentenceCounter++;
    });
    dispatch({ type: SET_LOADING, payload: false });
  } catch (err) {
    console.log(err);
    dispatch({ type: SET_LOADING, payload: false });
    window.alert("Something wrong with the twitter link");
  }
};

export const switchAnalysisType = (currentType) => (dispatch) => {
  dispatch({ type: SWITCH_ANALYSIS, payload: !currentType });
};

export const clearSentences = () => (dispatch) => {
  dispatch({ type: CLEAR_SENTENCES });
};
